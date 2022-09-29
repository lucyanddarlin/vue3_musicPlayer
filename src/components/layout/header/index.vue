<template>
  <div class="flex justify-between items-center h-14">
    <div class="flex items-center pl-5">
      <iconPark
        :icon="Left"
        :size="iconSize"
        :stroke-width="2"
        class="icon-btn"
        @click="router.back()"
      ></iconPark>
      <iconPark
        :icon="Right"
        :size="iconSize"
        :stroke-width="2"
        class="icon-btn"
        @click="router.forward()"
      ></iconPark>
      <div class="search ml-2">
        <SearchInput />
      </div>
    </div>
    <div class="flex items-center mr-5">
      <UserInfo />
      <IconPark :icon="Mail" :stroke-width="2" class="icon-btn" />
      <IconPark :icon="Platte" :stroke-width="2" class="icon-btn" />
      <IconPark :icon="HamburgerButton" :stroke-width="2" class="icon-btn" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HamburgerButton,
  Left,
  Mail,
  Platte,
  Right,
  Search,
} from "@icon-park/vue-next";
import SearchInput from "@/components/layout/header/searchInput.vue";
import UserInfo from "@/components/layout/header/userInfo.vue";
import { useRouter } from "vue-router";
const iconSize = 22;
const router = useRouter();
</script>

<style lang="scss" scoped>
.icon-btn {
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400;
}
.search {
  @apply text-xs;
  :deep(.el-input__inner) {
    @apply text-xs;
  }
}
</style>
