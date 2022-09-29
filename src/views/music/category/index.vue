<template>
  <div>
    <Tag @handleClickTag="handleClickTag" />
    <div class="py-5 text-xl">{{ pageData.cat }}歌单</div>
    <div
      class="grid grid-flow-row grid-cols-3 lg: grid-cols-5 2xl:grid-cols-8 gap-5"
    >
      <div
        class=""
        v-for="(list, index) in highPlayList"
        :key="index"
        @click="router.push({ name: 'playList', query: { id: list.id } })"
      >
        <CoverPlay
          :pic="list.coverImgUrl"
          :play-count="list.playCount"
          show-play-count
        />
        <div class="text-xs mt-2 truncate">{{ list.name }}</div>
      </div>
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
import Tag from "./tag.vue";
import CoverPlay from "@/components/common/CoverPlay.vue";
import { onMounted, reactive, ref } from "vue";
import { reqGetHighPlayList } from "@/utils";
import type { PlaylistHighQuality } from "@/modules/apiDataType/tags";
import { useRouter } from "vue-router";

const router = useRouter();
const pageData = reactive({
  loading: false,
  cat: "全部",
  limit: 60,
  before: 0,
  noMore: false,
});
const highPlayList = ref<PlaylistHighQuality[]>([]);

const getData = async () => {
  pageData.loading = true;
  try {
    const { more, playlists, lasttime } = await reqGetHighPlayList(
      pageData.cat,
      pageData.limit,
      pageData.before
    );
    if (pageData.before === 0) {
      highPlayList.value = playlists;
    } else {
      highPlayList.value.push(...playlists);
    }
    pageData.noMore = !more;
    pageData.before = lasttime;
  } catch (e) {
    pageData.before--;
  }
  pageData.loading = false;
};
onMounted(getData);
const handleClickTag = (tabName: string) => {
  pageData.cat = tabName;
  pageData.before = 0;
  getData();
};
const handleLoadMore = () => {
  getData();
};
</script>

<style lang="scss"></style>
