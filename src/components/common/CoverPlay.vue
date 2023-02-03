<template>
  <div
    class="cover-play-image"
    :class="{ 'aspect-square': !video, 'aspect-video': video }"
  >
    <el-image
      :src="pic"
      :alt="name"
      class="w-full bg-gray-50 object-cover"
    ></el-image>
    <div class="mask flex justify-center items-center">
      <IconPark
        :icon="PlayOne"
        theme="filled"
        size="50"
        class="text-white opacity-0 transition-opacity hover:text-teal-400 play-icon"
      ></IconPark>
    </div>
    <div class="play-count" v-if="showPlayCount">
      <IconPark :icon="video ? Play : Headset" size="12" class="mr-1" />
      {{ useNumberFormat(playCount || 0) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPark from "@/components/common/iconPark/index.vue";
import { PlayOne, Play, Headset } from "@icon-park/vue-next";
import { useNumberFormat } from "@/utils/common/number";


defineProps<{
  pic: string;
  playCount?: number;
  video?: boolean;
  showPlayCount?: boolean;
  name?: string;
  
}>();
</script>

<style lang="scss">
.cover-play-image {
  @apply rounded-lg cursor-pointer transition-all overflow-hidden relative;
  @apply hover:-translate-y-1;
  .mask {
    @apply absolute inset-0 bg-black bg-opacity-0 transition-all duration-500;
  }
  .play-count {
    @apply absolute bottom-1 right-1 text-xs text-white bg-black rounded-full bg-opacity-80 px-2 py-0.5 flex items-center scale-90 transition-all;
  }

  &:hover {
    .mask {
      @apply bg-opacity-50;
      .play-icon {
        @apply opacity-100;
      }
    }
    .play-count {
      @apply opacity-0;
    }
  }
}
</style>
