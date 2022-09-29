<template>
  <Swiper
    slides-per-group-auto
    slides-per-view="auto"
    :navigation="true"
    :grab-cursor="true"
  >
    <SwiperSlide v-for="banner in bannerList" :key="banner.adid">
      <img :src="banner.pic" alt="" class="banner-item" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import { useCommonStore } from "@/stores/common";
import { onMounted, toRefs } from "vue";
const { bannerList } = toRefs(useCommonStore());
const { getBannerList } = useCommonStore();

onMounted(async () => {
  await getBannerList();
});
</script>

<style lang="scss">
.swiper {
  @apply -mx-2.5;
  .swiper-slide {
    @apply w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 px-2.5;
  }
}
.banner-item {
  @apply rounded-lg transition-all cursor-pointer object-cover;
  @apply hover:shadow hover:opacity-80;
}
</style>
