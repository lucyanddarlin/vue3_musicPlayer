<template>
  <div class="pb-5">
    <div
      class="flex mb-5 text-xs items-center"
      v-for="option in options"
      :key="option.key"
    >
      <div class="flex-shrink-0 text-slate-400">{{ option.name }}：</div>
      <div class="ml-3">
        <el-space wrap :size="2" :spacer="spacer">
          <div
            type="text"
            class="hover-text px-1 py-0.5"
            v-for="(item, index) in option.list"
            :key="index"
            @click="handleChangeOption(item.key, option.key)"
            :class="{
              active:
                (item.key === pageData.type && option.key === 'type') ||
                (item.key === pageData.area && option.key === 'area') ||
                (item.key === pageData.initial && option.key === 'initial'),
            }"
          >
            {{ item.name }}
          </div>
        </el-space>
      </div>
    </div>
  </div>
  <div
    class="grid grid-flow-row gap-5 grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10"
  >
    <div
      class="flex flex-col items-center"
      v-for="artist in artistList"
      :key="artist.id"
      @click="router.push({ name: 'artistDetail', query: { id: artist.id } })"
    >
      <img
        :src="artist.img1v1Url + '?param=120y120'"
        alt=""
        class="rounded-full cursor-pointer w-full aspect-square object-cover bg-dc"
      />
      <div class="mt-2 text-sm">{{ artist.name }}</div>
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
import { reactive, h, ref, onMounted } from "vue";
import { ElDivider } from "element-plus";
import type { IArtist } from "@/modules/apiDataType/artist";
import { reqGetArtistList } from "@/utils";
import { useRouter } from "vue-router";

const router = useRouter();
const spacer = h(ElDivider, { direction: "vertical" });

const pageData = reactive({
  init: false,
  loading: false,
  page: 0,
  limit: 60,
  initial: "-1",
  type: -1,
  area: -1,
  noMore: false,
});
const artistList = ref<IArtist[]>([]);

const handleChangeOption = (itemKey: number | string, optionKey: string) => {
  pageData.page = 0;
  if (optionKey === "area") {
    pageData.area = itemKey as number;
  } else if (optionKey === "type") {
    pageData.type = itemKey as number;
  } else if (optionKey === "initial") {
    pageData.initial = itemKey as string;
  }
  getData();
};

const getData = async () => {
  pageData.loading = true;
  try {
    const { artists } = await reqGetArtistList(pageData);

    if (pageData.page === 0) artistList.value = artists;
    else artistList.value.push(...artists);
  } catch (e) {
    pageData.page--;
  }
  pageData.loading = false;
};
onMounted(getData);

const handleLoadMore = () => {
  pageData.page++;
  getData();
};

const options: {
  name: string;
  key: string;
  list: {
    key: string | number;
    name: string;
  }[];
}[] = [
  {
    name: "语种",
    key: "area",
    list: [
      { key: -1, name: "全部" },
      { key: 7, name: "华语" },
      { key: 96, name: "欧美" },
      { key: 8, name: "日本" },
      { key: 16, name: "韩国" },
      { key: 0, name: "其他" },
    ],
  },
  {
    name: "分类",
    key: "type",
    list: [
      { key: -1, name: "全部" },
      { key: 1, name: "男歌手" },
      { key: 2, name: "女歌手" },
      { key: 3, name: "乐队组合" },
    ],
  },
  {
    name: "筛选",
    key: "initial",
    list: [
      { key: "-1", name: "热门" },
      { key: "a", name: "A" },
      { key: "b", name: "B" },
      { key: "c", name: "C" },
      { key: "d", name: "D" },
      { key: "e", name: "E" },
      { key: "f", name: "F" },
      { key: "g", name: "G" },
      { key: "h", name: "H" },
      { key: "i", name: "I" },
      { key: "j", name: "J" },
      { key: "k", name: "K" },
      { key: "l", name: "L" },
      { key: "m", name: "M" },
      { key: "n", name: "N" },
      { key: "o", name: "O" },
      { key: "p", name: "P" },
      { key: "q", name: "Q" },
      { key: "r", name: "R" },
      { key: "s", name: "S" },
      { key: "t", name: "T" },
      { key: "u", name: "U" },
      { key: "v", name: "V" },
      { key: "w", name: "W" },
      { key: "x", name: "X" },
      { key: "y", name: "Y" },
      { key: "z", name: "Z" },
      { key: "0", name: "#" },
    ],
  },
];
</script>

<style lang="scss" scoped>
.active {
  @apply rounded bg-emerald-400 text-white;
}
</style>
