<script setup>
import logo from '/logo.png'
</script>

<template>
  <v-app-bar color="#171717">
    <a href="/" style="text-decoration: none">
      <div class="logo-container">
        <img :src="logo" class="logo" alt="Logotyp" />

        <span class="brand-name"> AstroPic</span>
      </div>
    </a>
    <v-spacer></v-spacer>
    <div class="link-container">
      <v-app-bar-title>
        <router-link class="home-link" to="/">Home</router-link>
        <router-link class="randomize-link" to="/randomize">Randomize</router-link>
      </v-app-bar-title>
    </div>
  </v-app-bar>
</template>

<style scoped>
a {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
}

.home-link,
.randomize-link {
  padding: 0 10px;
  font-size: 1.45rem;
}

.home-link:hover,
.randomize-link:hover {
  color: #fff;
  transition: all 0.25s;
}

.link-container {
  padding-right: 5rem;
}

.logo {
  margin-left: 5rem;
  width: 1.8rem;
  height: auto;
  margin-top: 0.4rem;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-name {
  padding-top: 0.3rem;
  padding-left: 1.25rem;
  font-size: 1.45rem;
  color: #d0adf0;
}

@media only screen and (max-width: 600px) {
  .logo {
    margin-left: 2.4rem;
    width: 1.69rem;
  }

  .link-container {
    padding-right: 2.4rem;
  }

  .home-link,
  .randomize-link {
    padding: 0 10px;
    font-size: 1.26rem;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 400px) {

  .home-link,
  .randomize-link {
    padding: 0 10px;
    font-size: 1rem;
  }

  .brand-name {
    padding-top: 0.25rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    color: #d0adf0;
  }
}
</style>
