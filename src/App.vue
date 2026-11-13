<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <main class="card">
    <h1>Hello World 👋</h1>
    <p class="subtitle">Vue 3 + Vite · 部署在 GitHub Pages</p>

    <button class="counter" @click="count++">
      点了我 {{ count }} 次
    </button>

    <p class="hint">改一行代码，push 到 main，页面就会自动更新。</p>
  </main>
</template>
