<template>
  <div class="album">
    <div class="p-5" v-if="albumInfo">
      <Info :album="albumInfo" />
      <el-tabs v-model="tab" class="mt-3">
        <el-tab-pane :label="`歌曲 ${songsList.length}`" name="music">
          <div class="flex text-xs text-gray-400 py-2">
            <div class="flex-auto">歌曲</div>
            <div class="w-1/3">歌手</div>
            <div class="w-20">时长</div>
          </div>
          <div class="text-sm" style="font-size: 0.675rem">
            <template v-for="song in songsList" :key="song.id">
              <SongItem :song="song" show-ar-name />
            </template>
          </div>
        </el-tab-pane>
        <el-tab-pane label="评论" name="comment">comment</el-tab-pane>
        <el-tab-pane label="专辑详情" name="album">
          <div
            class="text-xs text-slate-500 leading-7"
            style="white-space: pre-wrap"
            v-html="albumInfo?.description"
          ></div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import Info from "./info.vue";
import SongItem from "@/components/common/songItem/index.vue";
import { useRoute } from "vue-router";
import { reqGetAlbumInfo } from "@/utils";
import { onMounted, ref } from "vue";
import type { IAlbum } from "@/modules/apiDataType/album";
import type { ISongDetail } from "@/modules/apiDataType/SongDetail";

const route = useRoute();
const albumInfo = ref<IAlbum>();
const songsList = ref<ISongDetail[]>([]);
const tab = ref("music");

const getData = async () => {
  const id: number = Number(route.query.id);
  const { album, songs } = await reqGetAlbumInfo(id);
  albumInfo.value = album;
  songsList.value = songs;
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss"></style>
