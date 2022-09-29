<template>
  <div class="h-20 flex flex-col items-stretch">
    <PlayBar />
    <div class="flex grow px-5 items-center">
      <div class="flex-1">
        <PlayerSong />
      </div>
      <div class="flex-1">
        <PlayController />
      </div>
      <div class="flex-1">
        <PlayerActions />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayBar from "./playerBar.vue";
import PlayerSong from "./playerSong.vue";
import PlayController from "./playerController.vue";
import PlayerActions from "./playerActions.vue";
</script>

<style lang="scss"></style>
