<template>
  <div class="px-5 music">
    <h1 class="text-3xl font-bold pt-8 pb-4">音乐馆</h1>
    <el-affix :offset="56" target=".music">
      <div class="bg-view">
        <el-tabs v-model="currentMenu" @tab-click="handleClickTabs">
          <el-tab-pane
            class="text-main"
            v-for="tab in musicMenu"
            :key="tab.name"
            :name="tab.name"
            :label="tab.label"
          />
        </el-tabs>
      </div>
    </el-affix>
  </div>
  <div class="mt-5 px-5">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useMusicMenu } from "@/views/music/useMusicMenu";

const { musicMenu, currentMenu, handleClickTabs } = useMusicMenu();
</script>

<style lang="scss">
.music {
  .el-tabs__nav-wrap::after {
    height: 0;
  }
  .el-tabs__header {
    @apply m-0;
  }
}
</style>
