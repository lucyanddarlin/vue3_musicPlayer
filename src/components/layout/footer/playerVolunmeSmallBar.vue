<template>
  <div class="player-volume flex flex-col items-center pt-2">
    <div>
      <el-slider
        vertical
        height="100px"
        :show-tooltip="false"
        v-model="volume"
        :min="0"
        :max="100"
        :disabled="muted"
        @input="setVolume"
      >
      </el-slider>
    </div>
    <div class="text-sm mt-3">{{ volume }}</div>
    <div class="mt-2">
      <IconPark
        :icon="muted ? VolumeMute : VolumeSmall"
        size="16"
        theme="filled"
        class="hover-text"
        @click="toggleMuted"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPark from "@/components/common/iconPark/index.vue";
import { VolumeMute, VolumeSmall } from "@icon-park/vue-next";
import { toRefs } from "vue";
import { usePlayerStore } from "@/stores/player";
const { muted, volume } = toRefs(usePlayerStore());
const { toggleMuted, setVolume } = usePlayerStore();
</script>

<style lang="scss">
.el-popover.el-popper {
  min-width: auto;
}
</style>
