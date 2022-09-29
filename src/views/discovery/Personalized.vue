<template>
  <div>
    <Title title="你的专属歌单" />
    <div
      class="grid grid-flow-row grid-cols-3 gap-5 lg:grid-cols-5 2xl:grid-cols-10"
    >
      <div
        v-for="(personalized, index) in personalizeList.sampleSize(10)"
        :key="index"
        @click="
          router.push({ name: 'playList', query: { id: personalized.id } })
        "
      >
        <CoverPlay
          :pic="personalized.picUrl"
          :playCount="personalized.playCount"
          show-play-count
        ></CoverPlay>
        <div class="text-xs mt-2 text-main truncate">
          {{ personalized.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "@/components/common/title/index.vue";
import CoverPlay from "../../components/common/CoverPlay.vue";
import { onMounted, toRefs } from "vue";
import { useMusicStore } from "@/stores/music";
import { useRouter } from "vue-router";

const router = useRouter();
const { personalizeList } = toRefs(useMusicStore());
const { getPersonalizeList } = useMusicStore();

onMounted(() => {
  getPersonalizeList();
});
</script>

<style lang="scss"></style>
