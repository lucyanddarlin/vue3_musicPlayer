<template>
  <div class="mt-5">
    <div
      class="grid grid-flow-row grid-cols-3 gap-5 lg:grid-cols-5 2xl:grid-cols-8"
    >
      <div
        v-for="album in albumList"
        :key="album.id"
        @click="router.push({ name: 'album', query: { id: album.id } })"
      >
        <CoverPlay :pic="album.picUrl" />
        <div class="mt-2 text-xs truncate">{{ album.name }}</div>
        <div class="mt-1 text-xs text-slate-400 truncate">
          {{ album.publishTime.toDate() }}
        </div>
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
import CoverPlay from "@/components/common/CoverPlay.vue";
import { computed, onMounted, reactive, ref } from "vue";
import type { IAlbum } from "@/modules/apiDataType/album";
import { reqGetAllAlbum } from "@/utils";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps<{ id: number }>();

const albumList = ref<IAlbum[]>([]);
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
    const { hotAlbums } = await reqGetAllAlbum(
      props.id,
      pageData.limit,
      offset.value
    );
    if (pageData.page === 0) {
      albumList.value = hotAlbums;
    } else {
      albumList.value.push(...hotAlbums);
    }
    if (hotAlbums.length < pageData.limit) pageData.noMore = true;
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
