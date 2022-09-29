<template>
  <el-popover
    width="250px"
    popper-style="max-width:auto;padding:0;"
    :visible="showPopover"
  >
    <template #reference>
      <ElInput
        placeholder="搜索音乐、MV、歌单"
        :prefix-icon="Search"
        v-model="searchKeyWord"
        @input="handleInput"
        @focus="showPopover = true"
        @focusout="showPopover = false"
        clearable
      />
    </template>
    <div class="h-96">
      <el-scrollbar>
        <div class="pb-1.5">
          <div v-if="showHot">
            <div class="pt-1.5 pb-2 px-2.5">热门搜索</div>
            <div
              class="p-2.5 hover-text flex justify-between items-center cursor-pointer text-xs"
              v-for="(hotItem, index) in searchHotList"
              :key="hotItem.searchWord"
            >
              <div>
                <span class="mr-1">{{ index + 1 }}.</span>
                <span>{{ hotItem.searchWord }}</span>
              </div>
              <div class="text-red-500 text-xs">
                {{ hotItem.score.numberFormat() }}
              </div>
            </div>
          </div>
          <SuggestSearch v-else />
        </div>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Search } from "@icon-park/vue-next";
import SuggestSearch from "./suggestSearch.vue";
import _ from "lodash";
import { useSearchStore } from "@/stores/search";
import { storeToRefs } from "pinia";
import { reqSearchHotList } from "@/utils";
import type { SearchHotData } from "@/modules/apiDataType/searchData";

const { searchKeyWord, showPopover, showHot } = storeToRefs(useSearchStore());
const store = useSearchStore();
let searchHotList = ref<SearchHotData[]>([]);
const initSearchHotList = async () => {
  const { data } = await reqSearchHotList();
  searchHotList.value = data;
};
onMounted(() => {
  initSearchHotList();
});
const handleInput = _.debounce(() => {
  store.suggestSearch();
}, 300);
</script>

<style lang="scss"></style>
