<script setup>
  import { ref } from 'vue'

  const emit = defineEmits(['update-date'])
  const selectedDate = ref(new Date().toISOString().split('T')[0])

  const updateBtn = () => {
    emit('update-date', selectedDate.value)
  }
</script>
<template>
  <div>
    <!-- formulär för att välja datum-->
    <form>
      <!-- v-modeln binder input-fältet till selectedDate. när användaren väljer datum uppdateras det automatiskt 
         @click="updateBtn()" när button klickas på körs metoden updateBtn() som kör fetchAPOD-->

      <input
        type="date"
        v-model="selectedDate"
        placeholder="Pick a date"
        aria-label="Enter a date"
      />
      <v-btn
        :ripple="{ center: true, class: 'custom-ripple' }"
        height="26px"
        elevation="0"
        class="custom-btn"
        type="button"
        @click="updateBtn"
        >Update</v-btn
      >
      <!-- v-on med @click-->
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
    width: 100%;
    transition: ease-out 0.3s;
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
    gap: 6px; /* mellanrum mellan input o button */
  }

  input {
    width: 150px;
    padding: 0 4px 0 10px; /* padding vid border */
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
</style>
