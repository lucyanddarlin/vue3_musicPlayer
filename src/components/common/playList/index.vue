<template>
  <el-drawer
    v-model="showPlayList"
    direction="rtl"
    size="320px"
    custom-class="play-list"
    :with-header="false"
  >
    <div class="h-screen flex flex-col">
      <div class="p-2.5 flex-shrink-0">
        <div class="text-xl">播放列表</div>
        <div class="flex items-center justify-between text-xs mt-1">
          <span>共 {{ playListCount }} 首歌曲</span>
          <div
            class="flex items-center text-dc hover-text"
            @click="clearPlayList"
          >
            <IconPark :icon="Delete" />
            <span class="ml-0.5">清空</span>
          </div>
        </div>
      </div>
      <div class="flex-1 overflow-hidden">
        <el-scrollbar>
          <PlayListSongItem
            v-for="song in playList"
            :key="song.id"
            :song="song"
            :active="song.id === id"
            @dblclick="playSong(song.id)"
          />
        </el-scrollbar>
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Delete } from "@icon-park/vue-next";
import { usePlayerStore } from "@/stores/player";
import IconPark from "@/components/common/iconPark/index.vue";
import PlayListSongItem from "./playListSongItem.vue";

const { showPlayList, playListCount, playList, id } = storeToRefs(
  usePlayerStore()
);
const { playSong, clearPlayList } = usePlayerStore();
</script>

<style lang="scss">
.play-list {
  .el-drawer__body {
    padding: 0;
  }
}
</style>
