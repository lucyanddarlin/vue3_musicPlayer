import { defineStore } from "pinia";
import { ref } from "vue";
import type { IBanner } from "@/modules/apiDataType/BannerData";
import { reqGetBannerList } from "@/utils";

export const useCommonStore = defineStore("common", () => {
  const bannerList = ref<IBanner[]>([]);
  const getBannerList = async () => {
    if (bannerList.value.length) return;
    const { banners } = await reqGetBannerList();
    bannerList.value = banners;
  };
  return {
    bannerList,
    getBannerList,
  };
});
