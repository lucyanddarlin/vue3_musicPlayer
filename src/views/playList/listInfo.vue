<template>
  <div class="flex items-stretch">
    <img :src="playList.coverImgUrl" alt="" class="w-44 h-44 rounded-xl" />
    <div class="flex-1 flex flex-col justify-between pl-5 py-1">
      <div>
        <div class="text-2xl font-bold">{{ playList.name }}</div>
        <div class="flex items-center text-dc pt-3 pb-2 text-xs">
          <el-avatar :src="playList.creator.avatarUrl" size="small" rounded />
          <div class="ml-2">{{ playList.creator.nickname }}</div>
          <div class="ml-5 flex text-dc">
            <div
              class="ml-2 cursor-pointer hover-text"
              v-for="tag in playList.tags"
              :key="tag"
            >
              #{{ tag }}
            </div>
          </div>
        </div>
        <div class="text-xs text-gray-500 leading-normal">
          <MoreText :text="playList.description" :end="90" />
        </div>
        <div class="justify-self-stretch mt-5 gap-x-2 flex items-center">
          <button class="w-32 button" @click="playAll">
            <IconPark :icon="PlayOne" size="22" class="mr-1" />
            <span>播放全部</span>
          </button>
          <button class="w-32 button-outline" @click="likePlayList">
            <IconPark :icon="Like" size="18" class="mr-1" />
            <span>收藏</span>
          </button>
          <button class="w-8 button-outline">
            <IconPark :icon="More" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MoreText from "@/components/common/moreText/index.vue";
import IconPark from "@/components/common/iconPark/index.vue";
import { PlayOne, Like, More } from "@icon-park/vue-next";
import type { PlayListDetail } from "@/modules/apiDataType/playListData";

defineProps<{
  playList: PlayListDetail;
  playAll: () => void;
}>();

const likePlayList = () => {
  console.log("list");
};
</script>

<style lang="scss"></style>
