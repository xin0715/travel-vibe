<script setup>

</script>

<template>
  <nav class="p-4 bg-gray-100 flex gap-4">
    <router-link to="/">Home</router-link>
    <router-link to="/weather">Weather</router-link>
    <router-link to="/outfit-guide">Outfit Guide</router-link>
    <router-link to="/travel-planner">Travel Planner</router-link>
    <router-link to="/mini-game">Mini Game</router-link>
  </nav>

  <main class="p-4">
    <router-view />
  </main>
</template>

<style scoped>

</style>
