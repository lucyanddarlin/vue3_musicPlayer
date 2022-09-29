<template>
  <div class="flex items-stretch">
    <img
      :src="artistDetail.artist.cover"
      alt=""
      class="w-44 h-44 rounded-full object-cover flex-shrink-0"
    />
    <div class="flex-1 flex flex-col justify-between pl-5 py-1">
      <div class="flex-1 flex flex-col justify-between">
        <div class="text-2xl font-bold">{{ artistDetail.artist.name }}</div>
        <div class="text-xs text-gray-500 leading-normal mt-2">
          {{ artistDetail.artist.briefDesc.substring(0, 90) }}
        </div>
        <div class="flex gap-x-5 text-xs mt-2 text-slate-500">
          <div>单曲数：{{ artistDetail.artist.musicSize }}</div>
          <div>专辑数：{{ artistDetail.artist.albumSize }}</div>
          <div>MV数：{{ artistDetail.artist.mvSize }}</div>
        </div>
      </div>

      <div class="justify-self-stretch mt-5 gap-x-2 flex items-center">
        <button class="w-32 button">
          <IconPark :icon="Plus" size="18" class="mr-1" />
          <span>关注</span>
        </button>
        <button class="w-32 button-outline">
          <IconPark :icon="Fm" size="18" class="mr-1" />
          <span>歌手电台</span>
        </button>
        <button class="w-8 button-outline">
          <IconPark :icon="More" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IArtistDetail } from "@/modules/apiDataType/artist";
import IconPark from "@/components/common/iconPark/index.vue";
import { Plus, Fm, More } from "@icon-park/vue-next";

defineProps<{
  artistDetail: IArtistDetail;
}>();
</script>

<style lang="scss"></style>
