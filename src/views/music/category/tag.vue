<template>
  <div
    class="grid grid-flow-row grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10 gap-2.5"
  >
    <div class="button-dc" @click="catClick('全部')">全部</div>
    <div
      class="button-dc"
      v-for="tag in tagList"
      :key="tag.id"
      @click="catClick(tag.name)"
    >
      {{ tag.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { ITag } from "@/modules/apiDataType/tags";
import { reqGetAllTags } from "@/utils";

const tagList = ref<ITag[]>([]);
const emit = defineEmits<{ (e: "handleClickTag", name: string): void }>();

const catClick = (tagName: string) => {
  emit("handleClickTag", tagName);
};
onMounted(async () => {
  const { tags } = await reqGetAllTags();
  tagList.value = tags;
});
</script>

<style lang="scss"></style>
