<script setup>
import logo from '/logo.png'
</script>

<template>
  <v-app-bar color="#121212" height="80">
    <a href="/" style="text-decoration: none">
      <div class="logo-container">
        <img :src="logo" class="logo" alt="Logotyp" />

        <span class="brand-name">Portfolio</span>
      </div>
    </a>

    <v-spacer></v-spacer>

    <div class="link-container">
      <router-link class="nav-link" to="/">
        <span>#</span> home
      </router-link>

      <router-link class="nav-link" to="/projects">
        <span>#</span> web
      </router-link>

      <router-link class="nav-link" to="/photography">
        <span>#</span> photography
      </router-link>

      <router-link class="nav-link" to="/about">
        <span>#</span> about
      </router-link>
    </div>
  </v-app-bar>
</template>

<style scoped>
a {
  text-decoration: none;
}

.nav-link {
  padding: 0 10px;
  color: #f6f6f6;
  text-decoration: none;
  font-family: var(--font-main);
  font-size: 1.2rem;
  opacity: 0.8;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.nav-link span {
  color: #d0adf0;
}

.nav-link:hover {
  transform: scale(1.15);
  opacity: 1;
}

.link-container {
  display: flex;
  align-items: center;
  gap: 1rem;
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
  font-family: var(--font-main);
}

.brand-name {
  /* "portfolio" */
  padding-top: 0.3rem;
  padding-left: 1.25rem;
  color: #d0adf0;
  text-decoration: none;
  font-family: var(--font-main);
  font-size: 1.5rem;
  opacity: 1;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.v-app-bar {
  background-color: #121212;
}

@media only screen and (max-width: 600px) {
  .logo {
    margin-left: 2.4rem;
    width: 1.69rem;
  }

  .link-container {
    padding-right: 2.4rem;
    gap: 0.3rem;
  }

  .nav-link {
    padding: 0 5px;
    font-size: 1rem;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 400px) {
  .nav-link {
    padding: 0 4px;
    font-size: 0.8rem;
  }

  .brand-name {
    padding-top: 0.25rem;
    padding-left: 0.75rem;
    font-size: 1rem;
  }
}
</style>