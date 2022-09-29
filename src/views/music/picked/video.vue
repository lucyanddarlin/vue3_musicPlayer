<template>
  <div>
    <Title title="独家放送" />
    <div class="grid grid-flow-row grid-cols-2 gap-5 lg:grid-cols-4">
      <div
        v-for="video in personalizedPrivateContent"
        :key="video.id"
        @click="router.push({ name: 'mvDetail', query: { id: video.id } })"
      >
        <CoverPlay :pic="video.sPicUrl" video />
        <div class="truncate mt-2 text-xs">{{ video.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "@/components/common/title/index.vue";
import CoverPlay from "@/components/common/CoverPlay.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useVideoStore } from "@/stores/video";
import { useRouter } from "vue-router";
const { personalizedPrivateContent } = storeToRefs(useVideoStore());
const { getPersonalizedPrivateContent } = useVideoStore();
const router = useRouter();

onMounted(() => {
  getPersonalizedPrivateContent();
});
</script>

<style lang="scss"></style>
