import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  IPersonalized,
  INewSong,
  ITopList,
} from "@/modules/apiDataType/musicData";
import {
  reqGetNewSongList,
  reqGetPersonalizeList,
  reqGetTopList,
} from "@/utils";

export const useMusicStore = defineStore("music", () => {
  const personalizeList = ref<IPersonalized[]>([]);
  const getPersonalizeList = async () => {
    const { result } = await reqGetPersonalizeList();
    personalizeList.value = result;
  };

  const newSongList = ref<INewSong[]>([]);
  const getNewSongList = async () => {
    const { result } = await reqGetNewSongList();
    newSongList.value = result;
  };

  const topList = ref<ITopList[]>([]);
  const getTopList = async () => {
    const { list } = await reqGetTopList();
    topList.value = list;
  };
  return {
    personalizeList,
    getPersonalizeList,

    newSongList,
    getNewSongList,

    topList,
    getTopList,
  };
});
