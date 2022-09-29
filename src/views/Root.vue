<template>
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0">
      <Menu></Menu>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="h-14">
        <Header></Header>
      </div>
      <div class="flex-1 overflow-hidden">
        <el-scrollbar>
          <div class="container mx-auto">
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </div>
      <div class="h-20">
        <Footer></Footer>
      </div>
    </div>
  </div>
  <PlayList />
</template>

<script setup lang="ts">
import Menu from "@/components/layout/menu/index.vue";
import Header from "@/components/layout/header/index.vue";
import Footer from "@/components/layout/footer/index.vue";
import PlayList from "@/components/common/playList/index.vue";
</script>

<style lang="scss"></style>
