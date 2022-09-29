<template>
  <div class="flex items-center cursor-pointer hover-text">
    <el-avatar size="small" :src="userProfile?.avatarUrl"></el-avatar>
    <span class="text-xs ml-1.5" v-if="isLogin">
      {{ userProfile?.nickname }}
    </span>
    <span class="text-xs ml-1.5" v-else @click="handleShowLogin">
      点击登录</span
    >
  </div>

  <el-dialog
    v-model="showLogin"
    title="二维码登录"
    width="330px"
    append-to-body
  >
    <div class="flex items-center flex-col" v-if="loginType === 0">
      <img :src="qrImg" alt="" class="w-40 h-40" />
      <span class="text-xs my-3">
        使用
        <span class="text-sky-500 mx-1 cursor-pointer">网易云APP</span>
        扫码登录
      </span>
      <div class="text-xs cursor-pointer" @click="loginType = 1">
        选择其他方式登录
      </div>
    </div>
    <div v-if="loginType === 1">
      <el-form :model="userLoginForm">
        <el-form-item>
          <el-input
            v-model="userLoginForm.phone"
            :prefix-icon="Phone"
            autocomplete="off"
            placeholder="请输入手机号"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="userLoginForm.password"
            :prefix-icon="Lock"
            type="password"
            autocomplete="off"
            placeholder="请输入密码"
            placeholder-style="text-xs"
            show-password
          />
        </el-form-item>
      </el-form>
      <span class="text-xs cursor-pointer" @click="loginType = 0">
        二维码登录
      </span>
    </div>

    <template #footer v-if="loginType === 1">
      <span>
        <el-button @click="showLogin = false">取消</el-button>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import type { ILoginForm } from "@/modules/apiDataType/userData";
import { Lock, Phone } from "@icon-park/vue-next";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import type { DebuggerEventExtraInfo } from "@vue/reactivity";

const userLoginForm = reactive<ILoginForm>({
  phone: "",
  password: "",
});
const { showLogin, qrImg, loginType, isLogin, userProfile } = storeToRefs(
  useUserStore()
);
const store = useUserStore();
let timer: any = null;

store.$subscribe((arg, state) => {
  if ((arg.events as DebuggerEventExtraInfo).key === "loginType") {
    if (showLogin && state.loginType === 0) {
      timer = setInterval(() => {
        store.checkQr();
      }, 1000);
    }
    if (state.loginType === 1) {
      clearInterval(timer);
      timer = null;
    }
  }
  if ((arg.events as DebuggerEventExtraInfo).key === "showLogin") {
    if (!state.showLogin) {
      clearInterval(timer);
      timer = null;
    }
  }
});
onMounted(() => {
  store.checkLoginStatus();
});
const handleShowLogin = async () => {
  showLogin.value = true;
  loginType.value = 0;
  await store.getQrkey();
  await store.createQr();
};
const handleLogin = async () => {
  await store.userPhoneLogin(userLoginForm.phone, userLoginForm.password);
};
</script>

<style lang="scss" scoped>
:deep(.el-input__inner) {
  &::placeholder {
    @apply text-xs;
  }
}
</style>
