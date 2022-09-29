<template>
  <div class="flex justify-center items-center gap-x-3 se">
    <IconPark
      :icon="playType === 0 ? PlayOnce : playType === 1 ? LoopOnce : ShuffleOne"
      size="20"
      class="hover-text"
      :stroke-width="3"
      @click="toggleLoopType"
    />
    <IconPark
      :icon="GoStart"
      size="28"
      class="hover-text"
      @click="playPrevSong"
    />
    <IconPark
      :icon="isPause ? Play : PauseOne"
      size="46"
      theme="filled"
      class="hover-text text-emerald-400"
      @click="togglePlayer"
    />
    <IconPark
      :icon="GoEnd"
      size="28"
      class="hover-text"
      @click="playNextSong"
    />
    <el-popover placement="top" width="50px">
      <template #reference>
        <IconPark
          :icon="VolumeSmall"
          size="20"
          :stroke-width="3"
          class="hover-text"
        />
      </template>
      <PlayerVolumeBar />
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import {
  Play,
  PauseOne,
  LoopOnce,
  ShuffleOne,
  PlayOnce,
  GoEnd,
  GoStart,
  VolumeSmall,
} from "@icon-park/vue-next";
import IconPark from "@/components/common/iconPark/index.vue";
import PlayerVolumeBar from "./playerVolunmeSmallBar.vue";
import { toRefs } from "vue";
import { usePlayerStore } from "@/stores/player";
const {
  isPause,
  togglePlayer,
  playNextSong,
  playPrevSong,
  playType,
  toggleLoopType,
} = toRefs(usePlayerStore());
</script>

<style lang="scss"></style>
