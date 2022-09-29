<template>
  <Title title="推荐新音乐" />
  <div
    class="grid grid-flow-row grid-cols-2 2xl:grid-cols-5 gap-y-2.5 gap-5 cursor-pointer"
  >
    <div
      class="hover-bg-view transition-all flex items-center"
      v-for="(song, index) in newSongList"
      :key="index"
      @click="playSong(song.id)"
    >
      <img
        :src="song.picUrl"
        class="w-12 h-12 object-cover rounded flex-shrink-0"
      />
      <div class="px-2 text-xs flex flex-col flex-auto w-1/3">
        <div class="text-xs flex-1 truncate">{{ song.name }}</div>
        <div class="mt-2 text-dc">{{ song.song.artists[0].name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "@//components/common/title/index.vue";
import { useMusicStore } from "@/stores/music";
import { onMounted, toRefs } from "vue";
import { usePlayerStore } from "@/stores/player";
const { newSongList } = toRefs(useMusicStore());
const { getNewSongList } = useMusicStore();
const { playSong } = usePlayerStore();

onMounted(() => {
  getNewSongList();
});
</script>

<style lang="scss"></style>
