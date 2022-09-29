<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { usePlayerInit } from "@/stores/player";

usePlayerInit();
</script>

<style scoped lang="scss"></style>
