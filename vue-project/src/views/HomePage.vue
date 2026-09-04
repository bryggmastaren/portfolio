<script setup>
  import { ref } from 'vue'
  import Form from '../components/Form.vue'
  import FetchAPOD from '../components/FetchAPOD.vue'

  const selectedDate = ref(new Date().toISOString().split('T')[0]) //toISOtring koncerterar datum till sträng, och [0] gör att datumet är array0 och tid array1ta när FetchAPOD skickar tillbaka data
  const updateDate = (date) => {
    selectedDate.value = date
  }
</script>

<template>
  <v-app>
    <Form @update-date="updateDate" />
    <FetchAPOD :selectedDate="selectedDate" />
  </v-app>
</template>
