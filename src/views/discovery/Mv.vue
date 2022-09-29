<template>
  <Title title="推荐MV" class="mt-5" />
  <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
    <div
      v-for="mv in personalizedMvList"
      :key="mv.id"
      @click="router.push({ name: 'mvDetail', query: { id: mv.id } })"
    >
      <CoverPlay
        :pic="mv.picUrl"
        :play-count="mv.playCount"
        :name="mv.name"
        video
        show-play-count
      ></CoverPlay>
      <div class="text-xs mt-2 truncate">{{ mv.name }}</div>
      <div class="text-xs mt-1.5 text-slate-400 truncate">
        {{ mv.artistName }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "@/components/common/title/index.vue";
import CoverPlay from "../../components/common/CoverPlay.vue";
import { onMounted, toRefs } from "vue";
import { useVideoStore } from "@/stores/video";
import { useRouter } from "vue-router";
const router = useRouter();
const { personalizedMvList } = toRefs(useVideoStore());
const { getPersonalizeMvList } = useVideoStore();

onMounted(() => {
  getPersonalizeMvList();
});
</script>

<style lang="scss"></style>
