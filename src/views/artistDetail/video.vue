<template>
  <div
    class="mt-5 grid grid-flow-row grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8 gap-5 object-cover"
  >
    <div class="" v-for="mv in mvsList" :key="mv.id">
      <CoverPlay
        :pic="mv.imgurl16v9"
        video
        :play-count="mv.playCount"
        show-play-count
        @click="router.push({ name: 'mvDetail', query: { id: mv.id } })"
      />
      <div class="text-xs text-gray-600 mt-2">{{ mv.name }}</div>
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
</template>

<script setup lang="ts">
import CoverPlay from "@/components/common/CoverPlay.vue";
import { computed, onMounted, reactive, ref } from "vue";
import { reqGetArtistMv } from "@/utils";
import type { IArtistMv } from "@/modules/apiDataType/videoData";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps<{ id: number }>();
const mvsList = ref<IArtistMv[]>([]);
const pageData = reactive({
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
    const { mvs } = await reqGetArtistMv(
      props.id,
      pageData.limit,
      offset.value
    );
    if (pageData.page === 0) {
      mvsList.value = mvs;
    } else {
      mvsList.value.push(...mvs);
    }
    if (mvs.length < pageData.limit) pageData.noMore = true;
  } catch (e) {
    pageData.page--;
  }
  pageData.loading = false;
};

onMounted(() => {
  getData();
});

const handleLoadMore = () => {
  pageData.page++;
  getData();
};
</script>

<style lang="scss"></style>
