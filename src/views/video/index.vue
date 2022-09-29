<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
      <el-popover
        width="60%"
        placement="bottom-start"
        popper-style="padding:0;"
      >
        <template #reference>
          <button class="button-outline px-5">
            <span class="mr-2">全部视频</span>
            <IconPark :icon="Right" />
          </button>
        </template>
        <div class="text-xl pt-5 pl-5 hover-text" @click="handleChangeId('0')">
          全部视频
        </div>
        <div class="h-96 py-5 pl-5">
          <ElScrollbar>
            <div class="grid grid-flow-row grid-cols-5 text-xs gap-5">
              <div
                v-for="tap in groupList"
                :key="tap.id"
                class="hover-text cursor-pointer"
                @click="handleChangeId(tap.id)"
              >
                {{ tap.name }}
              </div>
            </div>
          </ElScrollbar>
        </div>
      </el-popover>
      <div class="flex text-xs items-center gap-x-4">
        <div
          class="hover-text"
          v-for="tag in groupList.slice(0, 8)"
          @click="handleChangeId(tag.id)"
          :class="{ 'text-active': tag.id === pageData.id }"
        >
          {{ tag.name }}
        </div>
      </div>
    </div>
    <div
      class="mt-5 grid grid-flow-row grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5"
    >
      <div
        v-for="video in videoList"
        :key="video.data.vid"
        @click="
          router.push({ name: 'mvDetail', query: { vid: video.data.vid } })
        "
      >
        <CoverPlay :pic="video.data.coverUrl" video />
        <div class="mt-2 text-xs truncate">
          {{ video.data.title }}
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
import { onMounted, reactive, ref } from "vue";
import IconPark from "@/components/common/iconPark/index.vue";
import CoverPlay from "@/components/common/CoverPlay.vue";
import { Right } from "@icon-park/vue-next";
import type { IVideoGroup, Video } from "@/modules/apiDataType/videoData";
import { reqGetTimeLineVideo, reqGetVideoGroupList } from "@/utils";
import { useRouter } from "vue-router";

const router = useRouter();
const groupList = ref<IVideoGroup[]>([]);
const videoList = ref<Video[]>([]);
const pageData = reactive({
  noMore: false,
  loading: false,
  offset: 0,
  id: 0,
});

const getGroupList = async () => {
  const { data } = await reqGetVideoGroupList();
  groupList.value = data;
};

const getData = async () => {
  pageData.loading = true;
  pageData.offset = videoList.value.length;
  try {
    const { datas, hasmore } = await reqGetTimeLineVideo(
      pageData.id,
      pageData.offset
    );
    if (pageData.offset === 0) {
      videoList.value = datas;
    } else {
      videoList.value.push(...datas);
    }
    pageData.noMore = !hasmore;
  } catch (e) {}
  pageData.loading = false;
};

onMounted(() => {
  getGroupList();
  getData();
});

const handleLoadMore = () => {
  getData();
};
const handleChangeId = (id: string | number) => {
  pageData.id = Number(id);
  videoList.value = [];
  getData();
};
</script>

<style lang="scss"></style>
