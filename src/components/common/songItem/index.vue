<template>
  <div class="flex song-item items-center w-full hover-bg-view">
    <div class="flex-shrink-0 flex-1 flex items-center justify-between pr-5">
      <div class="flex-1 flex items-center w-10 flex-shrink-0">
        <IconPark
          :icon="Like"
          size="16"
          class="mr-1 text-gray-500 cursor-pointer hover:text-red-400"
        />
        <div
          class="truncate"
          style="max-width: 75%"
          :class="{ 'text-active': song.id === id }"
        >
          <small>{{ song.name }}</small>
        </div>
        <IconPark
          :icon="PlayTwo"
          size="16"
          class="ml-2 text-orange-400 cursor-pointer"
        />
      </div>
      <div class="hidden icon-action flex-shrink-0">
        <div class="flex items-center gap-x-1.5 ml-2 text-gray-400">
          <IconPark
            :icon="PlayOne"
            size="20"
            class="cursor-pointer hover-text"
            @click="playSong(song.id)"
          />
          <IconPark :icon="Add" size="16" class="cursor-pointer hover-text" />
          <IconPark
            :icon="DownTwo"
            size="16"
            class="cursor-pointer hover-text"
          />
          <IconPark
            :icon="MoreTwo"
            size="16"
            class="cursor-pointer hover-text"
          />
        </div>
      </div>
    </div>
    <div
      class="flex-shrink-0"
      :class="{ 'w-1/4': showAlName, 'w-1/3': !showAlName }"
      v-if="showArName"
    >
      <div class="w-9/12 truncate" @click="handleToArtistDetail(song)">
        <small class="max-w-full hover-text truncate">
          {{ song.ar.first().name }}
        </small>
      </div>
    </div>
    <div
      class="flex-shrink-0"
      :class="{ 'w-1/4': showArName, 'w-1/3': !showArName }"
      v-if="showAlName"
    >
      <div class="w-9/12 truncate" @click="handleToAlbumDetail(song)">
        <small class="max-w-full hover-text truncate">
          {{ song.al.name }}
        </small>
      </div>
    </div>
    <div class="w-20">
      <div class="w-20 truncate">
        {{ useFormatDuring(song.dt / 1000) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPark from "@/components/common/iconPark/index.vue";
import {
  Add,
  DownTwo,
  Like,
  MoreTwo,
  PlayOne,
  PlayTwo,
} from "@icon-park/vue-next";
import type { ISongDetail } from "@/modules/apiDataType/SongDetail";
import { useFormatDuring } from "@/utils/common/number";
import { usePlayerStore } from "@/stores/player";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
const router = useRouter();

const { id } = storeToRefs(usePlayerStore());
defineProps<{
  song: ISongDetail;
  showArName?: boolean;
  showAlName?: boolean;
}>();

const handleToArtistDetail = (song: ISongDetail) => {
  router.push({ name: "artistDetail", query: { id: song.ar.first().id } });
};

const handleToAlbumDetail = (song: ISongDetail) => {
  router.push({ name: "album", query: { id: song.al.id } });
};

const { playSong } = usePlayerStore();
</script>

<style lang="scss" scoped>
.song-item {
  @apply py-2.5 pl-0.5;
  &:hover {
    .icon-action {
      @apply inline-block;
    }
  }
}
</style>
