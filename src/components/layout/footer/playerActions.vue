<template>
  <div class="flex justify-end items-center gap-x-2.5">
    <span class="text-xs">
      {{ useFormatDuring(currentTime) }} / {{ useFormatDuring(duration) }}
    </span>
    <IconPark
      :icon="TextMessage"
      size="18"
      :stroke-width="3"
      title="歌词"
      class="hover-text"
    />
    <div class="flex items-center hover-text" @click="showPlayList = true">
      <IconPark
        :icon="MusicList"
        size="18"
        :stroke-width="3"
        title="播放列表"
      />
      <span class="text-sm">{{ playListCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MusicList, TextMessage } from "@icon-park/vue-next";
import IconPark from "@/components/common/iconPark/index.vue";
import { usePlayerStore } from "@/stores/player";
import { useFormatDuring } from "@/utils/common/number";
import { storeToRefs } from "pinia";

const { currentTime, duration, showPlayList, playListCount } = storeToRefs(
  usePlayerStore()
);
</script>

<style lang="scss"></style>
