<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['update-date', 'previous-day'])


const props = defineProps({
  selectedDate: {
    type: String,
    required: true,
  },
})
const selectedDate = ref(props.selectedDate)

watch(
  () => props.selectedDate,
  (newDate) => {
    selectedDate.value = newDate
  }
)
const updateBtn = () => {
  emit('update-date', selectedDate.value)
}
</script>
<template>
  <div>

    <form>
      <v-btn class="previous-day-btn" type="button" @click="emit('previous-day')">
        ←
      </v-btn>

      <input type="date" v-model="selectedDate" placeholder="Pick a date" aria-label="Enter date" />

      <v-btn :ripple="{ center: true, class: 'custom-ripple' }" height="26px" elevation="0" class="custom-btn"
        type="button" @click="updateBtn">
        Update
      </v-btn>
    </form>

  </div>
  <!-- kan även skrivas såhär
  vue
  <p>Copyright: {{ copyright || "No copyright information." }}</p>
  och i fetchAPOD():
  
  javascript
  this.copyright = data.copyright; // Ta bort fallback-strängen här-->
</template>
<style scoped>
* {
  box-sizing: border-box;
  transition: ease-out 0.3s;
  /* width: 100%; */
}

div {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  gap: 6px;
  /* mellanrum mellan input o button */
}

input {
  width: 150px;
  padding: 0 4px 0 10px;
  /* padding vid border */
  border: solid 1px #ffffff49;
  border-radius: 4px;
  height: 28px;
}

button {
  width: 90px;
  /* !! height ändras i template v-btn */
}

/* INOUT HOVER */
input[type='date'] {
  border: 1px solid #fff;
}

input[type='date']:hover {
  border: 1.25px solid #d0adf0;
  transform: scale(1.01);
}

/* DATE PICKER ICON */
input[type='date']::-webkit-calendar-picker-indicator {
  padding: 4px 6px;
  border-radius: 2px;
}

input[type='date']::-webkit-calendar-picker-indicator:hover {
  background-color: #d0adf0c0;
}

/* BUTTON HOVER */
.custom-btn {
  /* kunde ej använda >>> utan behöver använda ::v-deep pga vue */
  background-color: transparent;
  border: 1px solid #fff;
  height: 28px;
  transform: scale(1.05);
}

.custom-btn:hover {
  color: #fff;
  border: 1.3px solid #d0adf0;
  transform: scale(1.06);
}

/* animation så button matchar input */
button {
  transition: ease-in-out 0.3s !important;
}

/* MOBIL */
@media only screen and (max-width: 400px) {
  form {
    width: 235px;
    height: 24px;
  }

  button {
    width: 80px;
  }
}

.previous-day-btn {
  width: 30px !important;
  min-width: 30px !important;
  height: 28px;
  background-color: #9636f02d;
  border: 1px solid #fff;
}

.previous-day-btn:hover {
  color: #fff;
  border: 1.3px solid #d0adf0;
  transform: none;
}
</style>
