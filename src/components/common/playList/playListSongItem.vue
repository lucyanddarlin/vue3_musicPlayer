<template>
  <div
    class="flex p-2.5 border-b border-b-stone-50 dark:border-b-stone-800 hover-bg-view border-solid"
    :class="{ active: active }"
  >
    <el-image
      lazy
      :src="song.al?.picUrl + '?param=80y80'"
      class="w-10 flex-shrink-0 aspect-square"
    />
    <div class="ml-2 text-xs flex h-10 w-1 flex-1">
      <div class="flex-1 flex flex-col justify-between">
        <div class="flex">
          <div class="truncate">{{ song.name }}</div>
          <IconPark
            v-if="song.mv > 0"
            :icon="Youtobe"
            size="16"
            class="ml-2 text-orange-400 cursor-pointer"
          />
        </div>
        <div class="truncate">{{ song.ar[0]?.name }}</div>
      </div>
      <div class="flex-shrink-0 ml-5 flex items-center justify-end">
        <div class="truncate">
          <small>
            {{ useFormatDuring(song.dt / 1000) }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Youtobe } from "@icon-park/vue-next";
import type { ISongDetail } from "@/modules/apiDataType/SongDetail";
import IconPark from "@/components/common/iconPark/index.vue";
import { useFormatDuring } from "@/utils/common/number";

defineProps<{
  song: ISongDetail;
  active: boolean;
}>();
</script>

<style lang="scss" scoped>
.active {
  @apply border-solid border-l-2 border-l-emerald-400 text-emerald-400;
}
</style>
