<template>
  <div class="mt-2">
    <div class="flex text-xs py-2 text-gray-400">
      <div class="flex-auto">歌曲</div>
      <div class="w-1/4">歌手</div>
      <div class="w-1/4">专辑</div>
      <div class="w-20">时长</div>
    </div>
    <div class="text-sm" style="font-size: 0.675rem">
      <template v-for="song in songsList.slice(0, page * size)" :key="song.id">
        <song-item :song="song" show-ar-name show-al-name />
      </template>
    </div>
    <div
      class="flex justify-center py-5"
      v-if="songsList.length > size && !noMore"
    >
      <el-button text plain class="w-full text-center" @click="handleLoadMore">
        <span class="text-teal-400">加载更多</span>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SongItem from "@/components/common/songItem/index.vue";
import type { ISongDetail } from "@/modules/apiDataType/SongDetail";
import { computed, ref } from "vue";

const props = defineProps<{ songsList: ISongDetail[] }>();
const page = ref(1);
const size = ref(50);

const noMore = computed(() => {
  return page.value - props.songsList.length / size.value >= 0;
});

const handleLoadMore = () => {
  page.value++;
};
</script>

<style lang="scss"></style>
