<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects.js'
import Photography from '../components/Photography.vue'

const showExplore = ref(false)

const openExplore = () => {
  showExplore.value = true
}

const closeExplore = () => {
  showExplore.value = false
}

const handleOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closeExplore()
  }
}
</script>

<template>
  <main>
    <h1>LÅTTA</h1>

    <section class="hero-links">
      <div class="hero-line"></div>

      <div class="links">
        <button class="explore-link" @click="openExplore">
          [ explore ]
        </button>

        <a href="/about">[ about ]</a>
      </div>
      <div class="hero-intro">
        <p class="hero-title">FRONTEND DEVELOPER & CREATIVE</p>

        <p class="hero-description">
          I build websites with a focus on design, accessibility and interaction.
        </p>

        <div class="hero-skills">
          <span>&lt;/&gt; CODE</span>
          <span>✦ DESIGN</span>
          <span>◎ PHOTO</span>
        </div>
      </div>
    </section>


    <!-- PROJECTS -->

    <div id="projects" class="projects-container">
      <h2>my projects</h2>

      <section class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </section>
    </div>


    <!-- ABOUT -->

    <div id="about" class="about-me">
      <div class="about-header">
        <span>#about-me</span>
        <div class="about-line"></div>
      </div>

      <p>I’m a frontend developer with a background in TV and visual storytelling. I enjoy combining code and design to
        create websites that feel thoughtful, accessible and fun to use.

        When I’m not coding, I’m usually behind a camera.</p>
    </div>

    <!-- PHOTOGRAPHY -->

    <section id="photography">
      <Photography />
    </section>

    <!-- EXPLORE POPUP -->

    <div v-if="showExplore" class="explore-overlay" @click="handleOverlayClick">

      <div class="explore-window glitch-open">

        <!-- WINDOW BAR -->

        <div class="explore-window-bar">
          <span>explore.exe</span>

          <button class="close-button" @click="closeExplore" aria-label="Close explore menu">
            ×
          </button>
        </div>


        <!-- WINDOW CONTENT -->

        <div class="explore-content">

          <p class="explore-title">
            choose destination
          </p>

          <a href="#projects" @click="closeExplore">
            <span>[ 01 ]</span>
            projects
          </a>

          <a href="#photography" @click="closeExplore">
            <span>[ 02 ]</span>
            photography
          </a>

          <a href="#about" @click="closeExplore">
            <span>[ 03 ]</span>
            about me
          </a>

        </div>

      </div>

    </div>

  </main>
</template>

<style scoped>
body {
  background-color: #121212;
  font-family: var(--font-main);
}

h1 {
  color: #e8e8e8;
  margin-top: 1.5rem;
}


/* ================================= */
/* HERO */
/* ================================= */

.hero-links {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1.5rem;
  margin-bottom: 5rem;
}

.hero-line {
  width: 1400px;
  height: 1px;

  background-color: rgba(232, 232, 232, 0.5);

  margin-bottom: 1rem;
}

.about-me {
  margin: 0;

  color: rgba(242, 239, 239, 0.7);

  font-family: var(--font-main);
  font-size: 1rem;

  letter-spacing: 0.15em;

  margin-top: 2.5rem;
  margin-bottom: 5rem;
}

.hero-intro {
  display: flex;

  flex-direction: column;

  align-items: center;

  margin-top: 2.5rem;
}

.hero-title {
  margin: 0;

  color: #e8e8e8;

  font-size: 1.1rem;

  letter-spacing: 0.15em;
}

.hero-description {
  max-width: 600px;

  margin: 1rem 0 0;

  color: rgba(242, 239, 239, 0.7);

  font-size: 0.95rem;

  letter-spacing: 0.08em;

  text-align: center;

  line-height: 1.7;
}

.hero-skills {
  display: flex;

  gap: 3rem;

  margin-top: 2rem;

  color: rgba(242, 239, 239, 0.7);

  font-size: 0.8rem;

  letter-spacing: 0.12em;
}

/* ================================= */
/* HERO LINKS */
/* ================================= */

.links {
  display: flex;

  gap: 5rem;

  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.links a,
.explore-link {
  color: #e8e8e8;

  text-decoration: none;

  font-family: var(--font-main);
  font-size: 1.2rem;

  opacity: 0.7;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.links a:hover,
.explore-link:hover {
  transform: scale(1.25);
  opacity: 1;
}

.explore-link {
  border: none;
  background: none;
  padding: 0;

  cursor: pointer;
}


/* ================================= */
/* PROJECTS */
/* ================================= */

.projects-container {
  width: 100vw;

  margin-left: calc(50% - 50vw);

  background-color: #0a0a0ab3;

  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects-grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 5rem;

  padding: 2rem 0 3.4rem;
}


/* ================================= */
/* ABOUT */
/* ================================= */

.about-me {
  width: min(700px, 80vw);

  margin: 8rem 0 8rem 5vw;

  color: #f7f7f7;

  font-family: var(--font-main);
}

.about-header {
  display: flex;
  align-items: center;

  gap: 1.5rem;
}

.about-line {
  flex: 1;

  height: 1px;

  background-color: #f96dcac9;
}

.about-me p {
  margin-top: 2rem;
}


/* ================================= */
/* EXPLORE OVERLAY */
/* ================================= */

.explore-overlay {
  position: fixed;

  inset: 0;

  display: flex;

  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.7);

  z-index: 9999;

  padding: 2rem;

  box-sizing: border-box;
}


/* ================================= */
/* EXPLORE WINDOW */
/* ================================= */

.explore-window {
  width: min(650px, 90vw);

  background: #d0adf0;

  border: 2px solid #e8e8e8;

  border-right-color: #555;
  border-bottom-color: #555;

  box-shadow:
    5px 5px 0 #f96dca,
    9px 9px 0 rgba(0, 0, 0, 0.7);

  overflow: hidden;
}


/* ================================= */
/* EXPLORE WINDOW BAR */
/* ================================= */

.explore-window-bar {
  height: 32px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 0 10px;

  box-sizing: border-box;

  background: #e8e8e8;

  color: #111;

  font-family: var(--font-main);

  font-size: 0.75rem;
}


/* ================================= */
/* CLOSE BUTTON */
/* ================================= */

.close-button {
  border: none;

  background: none;

  color: #111;

  font-family: var(--font-main);

  font-size: 1rem;

  cursor: pointer;

  width: 20px;
  height: 20px;

  display: flex;

  align-items: center;
  justify-content: center;
}

.close-button:hover {
  color: #f96dca;
}


/* ================================= */
/* EXPLORE CONTENT */
/* ================================= */

.explore-content {
  display: flex;

  flex-direction: column;

  gap: 1rem;

  padding: 3rem;
}

.explore-title {
  margin: 0 0 1rem;

  color: #111;

  font-family: var(--font-main);

  font-size: 1rem;

  letter-spacing: 0.08em;
}

.explore-content a {
  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 1rem;

  color: #111;

  text-decoration: none;

  font-family: var(--font-main);

  font-size: 1rem;

  border: 1px solid rgba(17, 17, 17, 0.5);

  background: rgba(255, 255, 255, 0.2);

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.explore-content a:hover {
  background: rgba(255, 255, 255, 0.45);

  transform: translateX(6px);
}

.explore-content a span {
  opacity: 0.5;
}


/* ================================= */
/* GLITCH OPEN */
/* ================================= */

.glitch-open {
  animation: glitch-open 0.22s ease-out;
}

@keyframes glitch-open {

  0% {
    opacity: 0;

    transform: scale(0.96);

    filter:
      drop-shadow(-8px 0 rgba(15, 210, 255, 0.8)) drop-shadow(8px 0 rgba(246, 0, 153, 0.8));
  }

  25% {
    opacity: 1;

    transform: scale(1.01);

    filter:
      drop-shadow(-5px 0 rgba(15, 210, 255, 0.7)) drop-shadow(5px 0 rgba(246, 0, 153, 0.7));
  }

  50% {
    transform: scale(0.995);

    filter:
      drop-shadow(3px 0 rgba(15, 210, 255, 0.5)) drop-shadow(-3px 0 rgba(246, 0, 153, 0.5));
  }

  100% {
    opacity: 1;

    transform: scale(1);

    filter: none;
  }
}


/* ================================= */
/* RESPONSIVE */
/* ================================= */

@media only screen and (max-width: 1300px) {
  .projects-grid {
    grid-template-columns: 1fr;

    gap: 2rem;
  }
}
</style>