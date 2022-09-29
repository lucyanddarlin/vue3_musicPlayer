<template>
  <div class="play-list">
    <div class="p-5" v-if="playListDetail">
      <ListInfo :play-list="playListDetail" :play-all="() => playAllSong()" />
      <el-tabs class="mt-3" v-model="tab">
        <el-tab-pane lazy :label="`歌曲 ${songsList.length}`" name="tracks">
          <SongList :songs-list="songsList" />
        </el-tab-pane>
        <el-tab-pane lazy :label="`评论`" name="comment"> comment </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListInfo from "./listInfo.vue";
import SongList from "./songList.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

import type { ISongDetail } from "@/modules/apiDataType/SongDetail";
import type { PlayListDetail } from "@/modules/apiDataType/playListData";
import { reqGetPlayDetail, reqGetPlayListAllSongs } from "@/utils";
import { usePlayerStore } from "@/stores/player";
const { pushPlayerList, playSong } = usePlayerStore();
const route = useRoute();
const playListDetail = ref<PlayListDetail>();
const songsList = ref<ISongDetail[]>([]);
const tab = ref("tracks");

const getData = async () => {
  const id: number = Number(route.query.id);
  const { playlist } = await reqGetPlayDetail(id);
  playListDetail.value = playlist;
  const { songs } = await reqGetPlayListAllSongs(id);
  songsList.value = songs;
};

const playAllSong = () => {
  pushPlayerList(true, ...songsList.value);
  playSong(songsList.value.first().id);
  console.log("all");
};

onMounted(getData);
</script>

<style lang="scss">
.play-list {
  .el-tabs__nav-wrap::after {
    height: 0;
  }

  .el-tabs__header {
    @apply m-0;
  }
}
</style>
