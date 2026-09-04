<script setup>
  import { RouterView } from 'vue-router'
  import { ref, watch } from 'vue'
  import Nav from './components/Nav.vue'

  import { useTheme } from 'vuetify'
</script>

<template>
  <v-app>
    <Nav />
    <v-main>
      <Router-view />
    </v-main>
  </v-app>
</template>
