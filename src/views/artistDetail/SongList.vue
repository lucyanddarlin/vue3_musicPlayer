<template>
  <div class="mt-5 flex items-center justify-between">
    <div class="flex gap-x-2 items-center">
      <button class="button-outline button-sm w-28" @click="playAll">
        <IconPark :icon="PlayOne" size="14" class="mr-1" />
        播放全部
      </button>
      <button class="button-outline button-sm w-28">
        <IconPark :icon="Download" size="12" class="mr-1" />
        下载
      </button>
      <button class="button-outline button-sm w-28">
        <IconPark :icon="FullSelection" size="12" class="mr-1" />
        批量操作
      </button>
    </div>
    <div class="mr-10 flex gap-x-5 text-xs">
      <div
        class="hover-text"
        :class="{ 'text-teal-400': pageData.order === 'hot' }"
        @click="handleSetOrder('hot')"
      >
        最热
      </div>
      <div
        class="hover-text"
        :class="{ 'text-teal-400': pageData.order === 'time' }"
        @click="handleSetOrder('time')"
      >
        最新
      </div>
    </div>
  </div>
  <div class="mt-2">
    <div class="flex text-xs text-slate-400 py-2">
      <div class="flex-auto">歌曲</div>
      <div class="w-1/3">专辑</div>
      <div class="w-20">时长</div>
    </div>
    <div class="text-sm" style="font-size: 0.675rem">
      <template v-for="song in songList" :key="song.id">
        <SongItem :song="song" show-al-name :show-ar-name="false" />
      </template>
    </div>
    <div class="flex justify-center py-5" v-if="!pageData.noMore">
      <el-button
        text
        plain
        class="w-full text-center"
        @click="handleLoadMore"
        :loading="pageData.loading"
      >
        <span class="text-teal-400">加载更多</span>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPark from "@/components/common/iconPark/index.vue";
import SongItem from "@/components/common/songItem/index.vue";
import { PlayOne, Download, FullSelection } from "@icon-park/vue-next";
import { computed, onMounted, reactive, ref } from "vue";
import type { ISongDetail } from "@/modules/apiDataType/SongDetail";
import { reqGetArtistAllSongs } from "@/utils";
import { usePlayerStore } from "@/stores/player";
const { playSong, pushPlayerList } = usePlayerStore();

const props = defineProps<{ id: number }>();

const songList = ref<ISongDetail[]>([]);
const pageData = reactive({
  order: "hot",
  limit: 20,
  page: 0,
  loading: false,
  noMore: false,
});
const offset = computed(() => {
  if (pageData.page === 0) return 0;
  return pageData.limit * pageData.page;
});

const getData = async () => {
  pageData.loading = true;
  try {
    const { songs } = await reqGetArtistAllSongs(
      props.id,
      pageData.order,
      pageData.limit,
      offset.value
    );
    if (pageData.page === 0) {
      songList.value = songs;
    } else {
      songList.value.push(...songs);
    }
    if (songs.length < pageData.limit) pageData.noMore = true;
  } catch (e) {
    pageData.page--;
  }
  pageData.loading = false;
};

onMounted(() => {
  getData();
});

const playAll = () => {
  pushPlayerList(true, ...songList.value);
  playSong(songList.value.first().id);
};
const handleSetOrder = (order: "hot" | "time") => {
  pageData.order = order;
  pageData.page = 0;
  getData();
};
const handleLoadMore = () => {
  pageData.page++;
  getData();
};
</script>

<style lang="scss"></style>
