<script setup>
defineProps({
    project: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <article class="project-card">
        <div class="project-image">

            <div class="window-bar">

                <span>{{ project.title }}</span>

                <div class="window-buttons">

                    <span>_</span>

                    <span>□</span>

                    <span>×</span>

                </div>

            </div>

            <img :src="project.image" :alt="project.title" />

            <div class="project-info">
                <h2>{{ project.title }}</h2>

                <p>{{ project.description }}</p>

                <div class="technologies">
                    <span v-for="technology in project.technologies" :key="technology">
                        {{ technology }}</span>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.project-card {
    width: 100%;
}

.project-image {
    position: relative;
    width: 100%;
    max-width: 540px;
    height: 350px;

    margin: 2.5rem 0;

    overflow: hidden;

    border: 2px solid #e8e8e8;
    border-right-color: #555;
    border-bottom-color: #555;

    box-shadow:
        5px 5px 0 #d0adf0,
        9px 9px 0 rgba(0, 0, 0, 0.7);

    border-radius: 0;
}

@media only screen and (max-width: 1300px) {
    .project-image {
        max-width: 740px;
        width: 100%;
        height: auto;
        aspect-ratio: 3 / 2;
    }
}

.project-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    display: block;

    transition: opacity 0.3s ease;
}

.project-info {
    position: absolute;
    inset: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 3rem;
    box-sizing: border-box;

    background: #c9c9c9;
    color: #111111;

    opacity: 0;

    transition: opacity 0.5s ease;
}

.project-info h2 {
    margin: 0 0 1rem;

    font-family: var(--font-main);
    font-size: 2rem;
}

.project-info p {
    margin: 0 0 1.5rem;

    max-width: 400px;

    font-family: var(--font-main);
    font-size: 1rem;
    line-height: 1.5;
}

.technologies {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    font-family: var(--font-main);
    font-size: 0.9rem;
}

.technologies span {
    border-bottom: 1px solid #111;
}

/* HOVER */

.project-image:hover img {
    opacity: 0;
}

.project-image:hover .project-info {
    opacity: 1;
}

.window-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    height: 28px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8px;

    box-sizing: border-box;

    background: #e8e8e8;
    color: #111;

    font-family: var(--font-main);
    font-size: 0.75rem;

    z-index: 2;
}

.window-buttons {
    display: flex;
    gap: 6px;
}

.window-buttons span {
    width: 14px;
    text-align: center;
}
</style>