<script setup lang="ts">
import KanbanBoard from '@/components/KanbanBoard.vue'
</script>

<template>
  <div id="app">
    <a
      href="https://github.com/NuktukDev/Vue3KanbanBoard"
      title="GitHub Repo"
      class="hidden md:block text-center"
      >Click for GitHub Repo</a
    >
    <main class="relative">
      <KanbanBoard />
    </main>
  </div>
</template>

<style scoped></style>
