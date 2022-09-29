<template>
  <div class="flex player-song">
    <img
      :src="song.al?.picUrl || OpticalDisk"
      alt=""
      class="w-11 h-11 rounded"
    />
    <div class="ml-2 text-xs flex flex-col justify-between">
      <div class="w-52 2xl:w-96 cursor-pointer truncate">
        <div class="flex">
          <div class="bg-red-500 text-white text-xs rounded px-0.5 scale-75">
            试听
          </div>
          <span>{{ song.name || "TEST MUSIC" }}</span>
          <span class="ml-2 text-dc">
            - {{ song.ar?.first().name || "TEST" }}
          </span>
        </div>
      </div>
      <div class="flex gap-x-3 text-main">
        <IconPark
          :icon="Like"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
        ></IconPark>
        <IconPark
          :icon="DownTwo"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
        ></IconPark>
        <IconPark
          :icon="MoreTwo"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
        ></IconPark>
        <el-badge :value="1000" :max="999" class="badge">
          <IconPark
            :icon="Comment"
            size="18"
            :stroke-width="3"
            class="text-slate-400 hover-text"
          ></IconPark
        ></el-badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OpticalDisk } from "@/assets/img";
import IconPark from "@/components/common/iconPark/index.vue";
import { Like, DownTwo, MoreTwo, Comment } from "@icon-park/vue-next";
import { toRefs } from "vue";
import { usePlayerStore } from "@/stores/player";
const { song, songUrl } = toRefs(usePlayerStore());
</script>

<style lang="scss">
.player-song {
  .badge {
    .el-badge__content {
      @apply scale-75 left-1 bg-stone-100 text-slate-500 bg-opacity-80 right-auto;
    }
  }
}
</style>
