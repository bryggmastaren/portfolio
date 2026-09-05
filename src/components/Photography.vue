<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PhotographyPage from '../views/PhotographyPage.vue'

const photos = [
    '/photo1.jpg',
    '/photo2.png',
    '/photo3.jpg',
    '/photo4.jpg',
    '/photo5.jpg',
    '/photo6.jpg',
]

const selectedImage = ref(null)
const selectedIndex = ref(0)

const openImage = (index) => {
    selectedIndex.value = index
    selectedImage.value = photos[index]
}

const closeImage = () => {
    selectedImage.value = null
}

const previousImage = () => {
    if (selectedIndex.value > 0) {
        selectedIndex.value--
        selectedImage.value = photos[selectedIndex.value]
    }
}

const nextImage = () => {
    if (selectedIndex.value < photos.length - 1) {
        selectedIndex.value++
        selectedImage.value = photos[selectedIndex.value]
    }
}

const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
        closeImage()
    }
}

const handleKeydown = (event) => {
    if (!selectedImage.value) return

    if (event.key === 'Escape') {
        closeImage()
    }

    if (event.key === 'ArrowLeft') {
        previousImage()
    }

    if (event.key === 'ArrowRight') {
        nextImage()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
    <section id="photography" class="photography">

        <!-- PHOTOGRAPHY WINDOW -->
        <div class="photo-window">

            <!-- WINDOW BAR -->
            <div class="window-bar">
                <span>photography</span>

                <div class="window-buttons">
                    <span>_</span>
                    <span>□</span>
                    <span>×</span>
                </div>
            </div>

            <!-- PHOTOS -->
            <div class="photo-grid">

                <div v-for="(photo, index) in photos" :key="photo" class="photo" @click="openImage(index)">
                    <img :src="photo" :alt="`Photography ${index + 1}`" />
                </div>

            </div>

        </div>


        <!-- IMAGE LIGHTBOX -->
        <div v-if="selectedImage" class="image-overlay" @click="handleOverlayClick">

            <div class="image-window glitch-open">

                <!-- WINDOW BAR -->
                <div class="window-bar">

                    <span>
                        IMG_{{ String(selectedIndex + 1).padStart(4, '0') }}.jpg
                    </span>

                    <button class="close-button" @click="closeImage" aria-label="Close image">
                        ×
                    </button>

                </div>


                <!-- LARGE IMAGE -->
                <div class="large-image">
                    <img :src="selectedImage" alt="Selected photograph" />
                </div>


                <!-- PHOTO NAVIGATION -->
                <div class="photo-navigation">

                    <button @click="previousImage" :disabled="selectedIndex === 0" aria-label="Previous photo">
                        ←
                    </button>

                    <span>
                        {{ String(selectedIndex + 1).padStart(3, '0') }}
                        /
                        {{ String(photos.length).padStart(3, '0') }}
                    </span>

                    <button @click="nextImage" :disabled="selectedIndex === photos.length - 1" aria-label="Next photo">
                        →
                    </button>

                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>
/* ================================= */
/* PHOTOGRAPHY WINDOW */
/* ================================= */

.photography {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5rem 0;
}

.photo-window {
    width: 1400px;
    max-width: calc(100% - 4rem);

    border: 2px solid #e8e8e8;
    border-right-color: #555;
    border-bottom-color: #555;

    box-shadow:
        5px 5px 0 #d0adf0,
        9px 9px 0 rgba(0, 0, 0, 0.7);

    background: #121212;
}


/* ================================= */
/* WINDOW BAR */
/* ================================= */

.window-bar {
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

.window-buttons {
    display: flex;
    gap: 6px;
}

.window-buttons span {
    width: 14px;
    text-align: center;
}


/* ================================= */
/* PHOTO GRID */
/* ================================= */

.photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    padding: 1rem;
}

@media (max-width: 1300px) {

    .photo-grid {

        grid-template-columns: repeat(2, 1fr);

    }

    .photo {

        aspect-ratio: 3 / 2;

    }

    .photo-window {
        width: 100%;
        max-width: 740px;
    }

}

.photo {
    aspect-ratio: 4 / 3;
    overflow: hidden;

    cursor: pointer;
}

.photo img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    transition: transform 0.4s ease;
}

.photo:hover img {
    transform: scale(1.04);
}


/* ================================= */
/* IMAGE LIGHTBOX */
/* ================================= */

.image-overlay {
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.75);

    z-index: 9999;

    padding: 2rem;
    box-sizing: border-box;
}

.image-window {
    width: min(1300px, 92vw);
    max-height: 92vh;

    background: #121212;

    border: 2px solid #e8e8e8;
    border-right-color: #555;
    border-bottom-color: #555;

    box-shadow:
        5px 5px 0 #d0adf0,
        9px 9px 0 rgba(0, 0, 0, 0.7);

    overflow: hidden;
}


/* ================================= */
/* LIGHTBOX CLOSE BUTTON */
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
/* LARGE IMAGE */
/* ================================= */

.large-image {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;

    max-height: calc(92vh - 74px);

    box-sizing: border-box;
}

.large-image img {
    display: block;

    max-width: 100%;
    max-height: calc(92vh - 110px);

    object-fit: contain;
}


/* ================================= */
/* PHOTO NAVIGATION */
/* ================================= */

.photo-navigation {
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;

    background: #121212;

    color: #e8e8e8;

    border-top: 1px solid rgba(232, 232, 232, 0.25);

    font-family: var(--font-main);
    font-size: 0.75rem;
}

.photo-navigation button {
    border: none;
    background: none;

    color: #e8e8e8;

    font-family: var(--font-main);
    font-size: 1rem;

    cursor: pointer;

    transition:
        color 0.2s ease,
        transform 0.2s ease;
}

.photo-navigation button:hover:not(:disabled) {
    color: #f96dca;
    transform: scale(1.2);
}

.photo-navigation button:disabled {
    opacity: 0.25;
    cursor: default;
}


/* ================================= */
/* GLITCH OPEN ANIMATION */
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
</style>