import { defineStore } from "pinia";
import { isNull } from "@/utils/common/common";
import {
  reqCheckQr,
  reqCreateQr,
  reqGetLoginStatus,
  reqGetQrKey,
  reqUserLogin,
} from "@/utils";
import type { IUserInfoQRProfile } from "@/modules/apiDataType/userData";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: localStorage.getItem("TOKEN") || "",
      showLogin: false,
      qrKey: "",
      qrImg: "",
      loginType: -1,
      cookie: localStorage.getItem("COOKIE") || "",
      userProfile: {} as IUserInfoQRProfile,
    };
  },
  getters: {
    isLogin: (state) => {
      return !isNull(state.userProfile?.userId);
    },
  },
  actions: {
    async userPhoneLogin(phone: string, password: string) {
      const { cookie, token } = await reqUserLogin(phone, password);
      this.token = token;
      this.cookie = cookie;
      document.cookie = cookie;
      localStorage.setItem("TOKEN", token);
      localStorage.setItem("COOKIE", cookie);
      await this.checkLoginStatus();
      this.showLogin = false;
    },
    async getQrkey() {
      const { data } = await reqGetQrKey();
      this.qrKey = data.unikey;
    },
    async createQr() {
      const { data } = await reqCreateQr(this.qrKey);
      this.qrImg = data.qrimg;
    },
    async checkQr() {
      // code: 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
      const { code, cookie } = await reqCheckQr(this.qrKey);
      if (code == 800) {
        await this.getQrkey();
        await this.createQr();
        return;
      } else if (code == 803) {
        console.log("login success");
        await this.checkLoginStatus();
        this.showLogin = false;
      }
      console.log(code, cookie);
    },
    async checkLoginStatus() {
      const { data } = await reqGetLoginStatus();
      this.userProfile = data.profile;
    },
  },
});
