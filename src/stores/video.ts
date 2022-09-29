import { defineStore } from "pinia";
import { ref } from "vue";
import type { IPersonalizedMv } from "@/modules/apiDataType/musicData";
import {
  reqGetPersonalizedMv,
  reqGetpersonalizedPrivateContent,
} from "@/utils";
import type { IVideo } from "@/modules/apiDataType/videoData";

export const useVideoStore = defineStore("video", () => {
  const personalizedPrivateContent = ref<IVideo[]>([]);
  const getPersonalizedPrivateContent = async () => {
    const { result } = await reqGetpersonalizedPrivateContent(4);
    personalizedPrivateContent.value = result;
  };

  const personalizedMvList = ref<IPersonalizedMv[]>([]);
  const getPersonalizeMvList = async () => {
    const { result } = await reqGetPersonalizedMv();
    personalizedMvList.value = result;
  };
  return {
    personalizedMvList,
    getPersonalizeMvList,
    personalizedPrivateContent,
    getPersonalizedPrivateContent,
  };
});
