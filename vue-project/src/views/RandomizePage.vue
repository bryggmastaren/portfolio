<script setup>
  import { ref } from 'vue'
  import FetchAPOD from '../components/FetchAPOD.vue'

  const selectedDate = ref('')

  const randomizeDate = () => {
    const startDate = new Date(1995, 5, 16) // 16 juni 1995
    const endDate = new Date() // dagens datum
    const randomDate = new Date(
      startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
    )
    selectedDate.value = randomDate.toISOString().split('T')[0]
  }

  // Kör randomizeDate när sidan laddas
  randomizeDate()
</script>

<template>
  <v-app>
    <div class="btn-container">
      <v-btn
        :ripple="{ center: true, class: 'custom-ripple' }"
        height="26px"
        elevation="0"
        class="custom-btn"
        type="button"
        @click="randomizeDate"
        >Randomize Date</v-btn
      >
    </div>
    <div class="random-date-container">
      <p>
        Showing APOD from:
        <span class="random-date-span">{{ selectedDate }}</span>
      </p>
    </div>
    <FetchAPOD :selectedDate="selectedDate"
  /></v-app>
</template>

<style scoped>
  button {
    margin-bottom: 1.5rem;
    color: #d0adf0;
  }
  button:hover {
    border: 1.25px solid #d0adf0;
    background-color: #d0adf02c;
    transform: scale(1.01);
    color: #fff;
  }
  btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .custom-btn {
    width: 220px;
    background-color: transparent;
    border: 1px solid #fff;
    height: 28px;
  }
  .random-date-container {
    margin-bottom: 1rem;
  }
  .random-date-span {
    color: #d0adf0;
    text-decoration: #ffffffaf wavy underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 0.95px;
  }
</style>
