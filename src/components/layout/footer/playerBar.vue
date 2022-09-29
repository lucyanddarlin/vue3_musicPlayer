<template>
  <div class="play-bar">
    <el-slider
      :show-tooltip="false"
      :min="0"
      :max="duration"
      v-model="currentTime"
      @change="onSliderChange"
      @input="onSliderInput"
      @click="clickSlider"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { usePlayerStore } from "@/stores/player";

const { currentTime, duration, onSliderChange, onSliderInput } = toRefs(
  usePlayerStore()
);
const { clickSlider } = usePlayerStore();
</script>

<style lang="scss">
.play-bar {
  .el-slider {
    height: 10px;
    .el-slider__runway,
    .el-slider__bar {
      height: 2px;
      border-radius: 0;
    }
    .el-slider__button-wrapper {
      @apply opacity-0 transition-opacity;
      width: 10px;
      height: 10px;
      top: -10.5px;
    }
    .el-slider__button {
      width: 8px;
      height: 8px;
      @apply bg-emerald-400;
    }
    &:hover {
      .el-slider__button-wrapper {
        @apply opacity-100;
      }
    }
  }
}
</style>
