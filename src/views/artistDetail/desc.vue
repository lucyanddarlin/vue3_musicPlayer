<template>
  <div v-loading="!artistDesc" style="min-height: 200px">
    <div
      class=""
      v-if="artistDesc && artistDesc.length > 0"
      v-for="intro in artistDesc"
    >
      <div class="py-5 font-bold text-sm">
        {{ intro.ti }}
      </div>
      <div
        class="text-xs text-slate-500 leading-7"
        style="white-space: pre-wrap"
        v-html="intro.txt"
      ></div>
    </div>
    <el-empty description="暂无数据" v-else />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { IIntroduction } from "@/modules/apiDataType/descData";
import { reqGetArtistDesc } from "@/utils";

const props = defineProps<{ id: number }>();
const artistDesc = ref<IIntroduction[]>([]);

onMounted(async () => {
  const { introduction } = await reqGetArtistDesc(props.id);
  artistDesc.value = introduction;
});
</script>

<style lang="scss"></style>
