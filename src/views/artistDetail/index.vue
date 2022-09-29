<template>
  <div class="artist-detail p-5" v-if="artistDetail">
    <Info :artist-detail="artistDetail" />

    <el-tabs v-model="tab" class="mt-3">
      <el-tab-pane name="choice" label="精选"></el-tab-pane>
      <el-tab-pane
        name="music"
        :label="`歌曲 ${artistDetail.artist.musicSize}`"
      >
        <SongList :id="id" />
      </el-tab-pane>
      <el-tab-pane
        name="album"
        :label="`专辑 ${artistDetail.artist.albumSize}`"
      >
        <Album :id="id" />
      </el-tab-pane>
      <el-tab-pane name="video" :label="`视频 ${artistDetail.artist.mvSize}`">
        <Video :id="id" />
      </el-tab-pane>
      <el-tab-pane name="desc" label="详情">
        <Desc :id="id" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import Info from "./info.vue";
import SongList from "./SongList.vue";
import Album from "./album.vue";
import Desc from "./desc.vue";
import Video from "./video.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import type { IArtistDetail } from "@/modules/apiDataType/artist";
import { reqGetArtistDetail } from "@/utils";

const artistDetail = ref<IArtistDetail>();
const route = useRoute();
const id = Number(route.query.id);
const tab = ref("music");

onMounted(async () => {
  const { data } = await reqGetArtistDetail(id);
  artistDetail.value = data;
});
</script>

<style lang="scss">
.artist-detail {
  .el-tabs__nav-wrap::after {
    height: 0;
  }

  .el-tabs__header {
    @apply m-0;
  }
}
</style>
