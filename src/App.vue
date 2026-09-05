<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import GlitchBackground from './components/GlitchBackground.vue'
</script>

<template>
  <v-app>
    <GlitchBackground />

    <div class="site-content">
      <Nav />

      <v-main>
        <RouterView />
      </v-main>
    </div>
  </v-app>
</template>

<style scoped>
.site-content {
  position: relative;
  z-index: 1;
}
</style>