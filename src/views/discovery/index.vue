<template>
  <div class="px-5">
    <h1 class="text-3xl font-bold pt-8 pb-4">推荐</h1>
    <Banner />
    <Personalized />
    <NewSong />
    <Mv />
  </div>
</template>

<script setup lang="ts">
import Banner from "@/components/layout/banner/index.vue";
import Personalized from "./Personalized.vue";
import NewSong from "./PersonalizeNewSong.vue";
import Mv from "./Mv.vue";
</script>

<style lang="scss"></style>
