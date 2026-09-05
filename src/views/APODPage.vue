<script setup>
import { ref } from 'vue'
import Form from '../components/Form.vue'
import FetchAPOD from '../components/FetchAPOD.vue'

const selectedDate = ref(new Date().toISOString().split('T')[0])

const previousDay = () => {
    const date = new Date(selectedDate.value)
    const firstDate = new Date('1995-06-16') // First date of APOD

    if (date > firstDate) {
        date.setDate(date.getDate() - 1)
        selectedDate.value = date.toISOString().split('T')[0]
    }
}

const updateDate = (date) => {
    selectedDate.value = date
}
</script>

<template>
    <v-app>
        <Form :selected-date="selectedDate" @update-date="updateDate" @previous-day="previousDay" />

        <FetchAPOD :selectedDate="selectedDate" />
    </v-app>
</template>