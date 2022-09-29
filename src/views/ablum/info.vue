<template>
  <div class="flex items-stretch">
    <img :src="album.blurPicUrl" class="w-44 h-44 rounded-xl" />
    <div class="flex-1 flex flex-col justify-between pl-5 py-1">
      <div class="flex-1 flex-col flex justify-between">
        <div class="text-2xl font-bold">{{ album.name }}</div>
        <div class="text-xs text-gray-600">{{ album.artist.name }}</div>
        <div class="text-xs text-gray-500 leading-normal">
          {{ album.publishTime.toDate() }}
        </div>
      </div>
      <div class="justify-self-stretch mt-5 gap-x-2 flex items-center">
        <button class="w-32 button">
          <IconPark :icon="PlayOne" size="22" class="mr-1" />
          <span>播放全部</span>
        </button>
        <button class="w-32 button-outline">
          <IconPark :icon="Like" size="18" class="mr-1" />
          <span>收藏</span>
        </button>
        <button class="w-8 button-outline">
          <IconPark :icon="More" />
        </button>
      </div>
    </div>
  </div>
  <div class=""></div>
</template>

<script setup lang="ts">
import IconPark from "@/components/common/iconPark/index.vue";
import { PlayOne, Like, More } from "@icon-park/vue-next";
import type { IAlbum } from "@/modules/apiDataType/album";

defineProps<{ album: IAlbum }>();
</script>

<style lang="scss"></style>
