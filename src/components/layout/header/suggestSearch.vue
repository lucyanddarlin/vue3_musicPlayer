<template>
  <div
    v-if="suggestSearchResult"
    v-for="order in suggestSearchResult.order"
    :key="order"
  >
    <div class="pt-2 pb-1.5 px-2.5">{{ getTitle(order) }}</div>
    <!-- songs -->
    <div
      v-if="order === 'songs'"
      class="px-2.5 py-1.5 hover-bg-main cursor-pointer text-xs"
      v-for="song in suggestSearchResult.songs"
      :key="song.id"
    >
      <span class="text-emerald-500">{{ song.name.ellipsis(25) }}</span>
      <span class=""> - {{ song.artists.first()?.name.ellipsis(25) }}</span>
    </div>
    <!-- albums -->
    <div
      v-if="order === 'albums'"
      class="px-2.5 py-1.5 hover-bg-main cursor-pointer text-xs"
      v-for="albums in suggestSearchResult.albums"
      :key="albums.id"
    >
      <span class="text-emerald-500">{{ albums.name.ellipsis(25) }}</span>
      <span class=""> - {{ albums.artist.name.ellipsis(25) }}</span>
    </div>
    <!-- artists -->
    <div
      v-if="order === 'artists'"
      v-for="artists in suggestSearchResult.artists"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
    >
      <el-avatar size="small" :src="artists.img1v1Url"></el-avatar>
      <span class="align-middle text-emerald-500 ml-2">
        {{ artists.name.ellipsis(25) }}
      </span>
    </div>
    <!-- playlists -->
    <div
      v-if="order === 'playlists'"
      v-for="playlists in suggestSearchResult.playlists"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
    >
      <el-avatar size="small" :src="playlists.coverImgUrl"></el-avatar>
      <span class="align-middle text-emerald-500 ml-2">
        {{ playlists.name.ellipsis(25) }}
      </span>
    </div>
  </div>
  <div
    v-if="isNull(suggestSearchResult)"
    class="text-xs flex justify-center items-center pt-5"
  >
    暂无搜索结果
  </div>
</template>

<script setup lang="ts">
import { isNull } from "@/utils/common/common";
import { storeToRefs } from "pinia";
import { useSearchStore } from "@/stores/search";
const { suggestSearchResult } = storeToRefs(useSearchStore());

const getTitle = (order: string) => {
  switch (order) {
    case "songs":
      return "单曲";
    case "artists":
      return "歌手";
    case "albums":
      return "专辑";
    case "playlists":
      return "歌单";
  }
};
</script>

<style lang="scss"></style>
