<template>
  <div>
    <div class="text-xl pb-5 font-bold">官方榜</div>
    <div class="grid grid-flow-row grid-cols-2 2xl:grid-cols-4 gap-5">
      <div
        v-for="top in topList.slice(0, 4)"
        :key="top.id"
        class="flex items-center rounded-lg bg-dc cursor-pointer"
        @click="toPlayList(top)"
      >
        <CoverPlay
          :name="top.name"
          :pic="top.coverImgUrl"
          :play-count="top.playCount"
          show-play-count
          class="w-36 flex-shrink-0"
        />
        <div class="px-5 flex-1 flex-shrink-0 flex flex-col">
          <div class="text-xl font-bold">{{ top.name }}</div>
          <div class="text-main text-xs mt-2">
            <div v-for="(track, index) in top.tracks" :key="index" class="mt-2">
              <div class="flex">
                <span class="mr-1">{{ index + 1 }}</span>
                <div class="flex-auto truncate w-20">
                  {{ track.first }} - {{ track.second }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-xl py-5 font-bold">特色榜</div>
    <div class="grid grid-flow-row grid-cols-5 2xl:grid-cols-10 gap-5">
      <div
        class=""
        v-for="list in topList.slice(4)"
        :key="list.id"
        @click="toPlayList(list)"
      >
        <CoverPlay
          :pic="list.coverImgUrl"
          :name="list.name"
          :play-count="list.playCount"
          show-play-count
        />
        <div class="text-xs mt-2">{{ list.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMusicStore } from "@/stores/music";
import { onMounted } from "vue";
import CoverPlay from "@/components/common/CoverPlay.vue";
import type { ITopList } from "@/modules/apiDataType/musicData";
import { useRouter } from "vue-router";

const { topList } = storeToRefs(useMusicStore());
const { getTopList } = useMusicStore();
const router = useRouter();

onMounted(() => {
  getTopList();
});

const toPlayList = (list: ITopList) => {
  router.push({ name: "playList", query: { id: list.id } });
};
</script>

<style lang="scss"></style>
