<template>
  <el-scrollbar>
    <div
      class="mt-10 pl-6 pr-6 space-y-1.5"
      v-for="(menus, index) in menuList"
      :key="index"
    >
      <div class="menu-title">{{ menus.name }}</div>
      <div
        class="menu-item hover-bg-main text-main"
        :class="{ active: currentKey === menuItem.key }"
        v-for="menuItem in menus.menus"
        :key="menuItem.key"
        @click="clickMenuItem(menuItem)"
      >
        <IconPark :icon="menuItem.icon" size="18" :theme="menuItem.theme" />
        <div class="ml-1">{{ menuItem.name }}</div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import IconPark from "@/components/common/iconPark/index.vue";
import { useMenu } from "@/components/layout/menu/useMenu";
const { menuList, currentKey, clickMenuItem } = useMenu();
</script>

<style lang="scss" scoped>
.menu-title {
  @apply text-xs pl-4 pr-4 pb-2;
}
.menu-item {
  @apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
}
.active {
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
</style>
