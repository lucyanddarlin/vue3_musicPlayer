<template>
  <div class="pl-5" v-if="url">
    <div class="flex gap-x-5">
      <div class="flex-1">
        <video
          class="aspect-video w-full"
          :src="url?.url"
          autoplay
          controls
        ></video>
      </div>
      <div class="hidden w-80 flex-shrink-0 xl:block">
        <div class="">大家都在看</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { IMv, IVideoUrl } from "@/modules/apiDataType/videoData";
import { reqGetMvUrl, reqGetVideoUrl } from "@/utils/index";
import { useRoute } from "vue-router";
import { usePlayerStore } from "@/stores/player";
import { isNull } from "@/utils/common/common";
const url = ref<IMv | IVideoUrl>();
const route = useRoute();
const id = Number(route.query.id);
const vid = Number(route.query.vid);

const { setSongPlay, setSongPause } = usePlayerStore();

onMounted(async () => {
  if (!isNull(id)) {
    const { data } = await reqGetMvUrl(id);
    url.value = data;
  } else {
    const { urls } = await reqGetVideoUrl(vid);
    url.value = urls[0];
  }

  setSongPause();
});

onUnmounted(() => {
  setTimeout(() => {
    setSongPlay();
  }, 1000);
});
</script>

<style lang="scss"></style>
