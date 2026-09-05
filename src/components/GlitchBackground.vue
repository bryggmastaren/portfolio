<template>
    <div class="background" aria-hidden="true">

        <!-- Ambient colour blobs -->
        <div class="gradients">
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
            <div class="blob blob-4"></div>
        </div>

        <!-- Glitch atmosphere -->
        <div class="glitch-world">

            <div class="scanlines"></div>
            <!-- RGB split -->

            <div class="rgb-split rgb-r"></div>
            <div class="rgb-split rgb-b"></div>



            <span class="glitch g1"></span>
            <span class="glitch g2"></span>
            <span class="glitch g3"></span>
            <span class="glitch g4"></span>
            <span class="glitch g5"></span>
            <span class="glitch g6"></span>
            <span class="glitch g7"></span>
            <span class="glitch g8"></span>
            <span class="glitch g9"></span>
            <span class="glitch g10"></span>
            <span class="glitch g11"></span>
            <span class="glitch g12"></span>
            <span class="glitch g13"></span>
            <span class="glitch g14"></span>
            <span class="glitch g15"></span>
            <span class="glitch g16"></span>
            <span class="glitch g17"></span>
            <span class="glitch g18"></span>
            <span class="glitch g19"></span>
            <span class="glitch g20"></span>

            <!-- Little digital fragments -->
            <span class="fragment f1"></span>
            <span class="fragment f2"></span>
            <span class="fragment f3"></span>
            <span class="fragment f4"></span>
            <span class="fragment f5"></span>
            <span class="fragment f6"></span>
            <span class="fragment f7"></span>
            <span class="fragment f8"></span>

        </div>

        <!-- Four point sparkles -->
        <div class="sparkles">
            <span class="sparkle s1">✦</span>
            <span class="sparkle s2">✦</span>
            <span class="sparkle s3">✦</span>
            <span class="sparkle s4">✦</span>
            <span class="sparkle s5">✦</span>
            <span class="sparkle s6">✦</span>
            <span class="sparkle s7">✦</span>
            <span class="sparkle s8">✦</span>
        </div>

    </div>
</template>

<style scoped>
/* =====================================================
     BASE
     ===================================================== */

.background {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;

    background-image: url('/9.jpg');
    background-size: cover;
    background-position: center;
}

.background::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(25, 24, 27, 0.364);
}


/* =====================================================
     AMBIENT GRADIENTS
     ===================================================== */

.gradients {
    position: absolute;
    inset: -30%;
    filter: blur(100px);
    opacity: 0.3;
}

.blob {
    position: absolute;
    border-radius: 50%;
}


/* Purple */

.blob-1 {
    width: 50vw;
    height: 50vw;

    top: -10%;
    left: 5%;

    background: #7136a875;

    animation: float-1 35s ease-in-out infinite;
}


/* Blue */

.blob-2 {
    width: 45vw;
    height: 45vw;

    top: 35%;
    right: -5%;

    background: #285fa892;

    animation: float-2 42s ease-in-out infinite;
}


/* Pink */

.blob-3 {
    width: 40vw;
    height: 40vw;

    bottom: -5%;
    left: 25%;

    background: #8208659c;

    animation: float-3 48s ease-in-out infinite;
}


/* Green */

.blob-4 {
    width: 30vw;
    height: 30vw;

    top: 25%;
    left: 45%;

    background: #348f63;

    opacity: 0.3;

    animation: float-4 40s ease-in-out infinite;
}


/* =====================================================
     GRADIENT MOVEMENT
     ===================================================== */

@keyframes float-1 {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    50% {
        transform: translate(18vw, 10vh) scale(1.2);
    }

}

@keyframes float-2 {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    50% {
        transform: translate(-15vw, -12vh) scale(1.15);
    }

}

@keyframes float-3 {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    50% {
        transform: translate(10vw, -15vh) scale(1.2);
    }

}

@keyframes float-4 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-12vw, 15vh);
    }

}


/* =====================================================
     SCANLINES
     ===================================================== */

.scanlines {
    position: absolute;
    inset: 0;

    background: repeating-linear-gradient(0deg,
            transparent 0px,
            transparent 5px,
            rgba(255, 255, 255, 0.025) 6px);

    opacity: 0.5;

    animation: scan 8s linear infinite;
}

/* =====================================================
   RGB SPLIT (chromatic aberration burst)
   ===================================================== */

.rgb-split {
    position: absolute;
    inset: 0;

    background-image: url('/9.jpg');
    background-size: cover;
    background-position: center;

    opacity: 0;
    mix-blend-mode: screen;
}

.rgb-r {
    filter: brightness(0.7) sepia(1) saturate(6) hue-rotate(-50deg);
    animation: rgb-r-glitch 7s steps(1) infinite;
}

.rgb-b {
    filter: brightness(1.1) sepia(1) saturate(6) hue-rotate(150deg);
    animation: rgb-b-glitch 7s steps(1) infinite;
}

@keyframes rgb-r-glitch {

    0%,
    82%,
    100% {
        opacity: 0;
        transform: translateX(0);
    }

    83% {
        opacity: 0.5;
        transform: translateX(6px);
    }

    84% {
        opacity: 0.3;
        transform: translateX(-4px);
    }

    85% {
        opacity: 0.6;
        transform: translateX(8px);
    }

    86% {
        opacity: 0.2;
        transform: translateX(-3px);
    }

    87% {
        opacity: 0;
    }
}

@keyframes rgb-b-glitch {

    0%,
    82%,
    100% {
        opacity: 0;
        transform: translateX(0);
    }

    83% {
        opacity: 0.5;
        transform: translateX(-6px);
    }

    84% {
        opacity: 0.3;
        transform: translateX(4px);
    }

    85% {
        opacity: 0.6;
        transform: translateX(-8px);
    }

    86% {
        opacity: 0.2;
        transform: translateX(3px);
    }

    87% {
        opacity: 0;
    }
}


/* =====================================================
   BLOCK GLITCH (bilden slits av och hoppar)
   ===================================================== */

.block-glitch {
    position: absolute;
    inset: 0;

    background-image: url('/9.jpg');
    background-size: cover;
    background-position: center;

    opacity: 0;
    animation: block-glitch 13s steps(1) infinite;
}

@keyframes block-glitch {

    0%,
    96%,
    100% {
        opacity: 0;
        clip-path: inset(0 0 100% 0);
        transform: translateX(0);
    }

    96.5% {
        opacity: 1;
        clip-path: inset(35% 0 55% 0);
        transform: translateX(-30px);
    }

    97% {
        opacity: 1;
        clip-path: inset(60% 0 20% 0);
        transform: translateX(25px);
    }

    97.5% {
        opacity: 1;
        clip-path: inset(10% 0 75% 0);
        transform: translateX(-15px);
    }

    98% {
        opacity: 0;
    }
}

@keyframes scan {

    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(12px);
    }

}


/* =====================================================
     GLITCH WORLD
     ===================================================== */

.glitch-world {
    position: absolute;
    inset: 0;
}


/* Base glitch */

.glitch {
    position: absolute;

    height: 3px;

    opacity: 0;

    animation: glitch 7s steps(1) infinite;
}


/* =====================================================
     GLITCH POSITIONS
     ===================================================== */

.g1 {
    width: 260px;
    top: 8%;
    left: 10%;
    background: #4db56a;
    animation-delay: 1s;
}

.g2 {
    width: 140px;
    top: 16%;
    left: 65%;
    background: #5b9ca8;
    animation-delay: 4s;
}

.g3 {
    width: 320px;
    top: 25%;
    left: 35%;
    background: #a04d91;
    animation-delay: 7s;
}

.g4 {
    width: 90px;
    top: 32%;
    left: 8%;
    background: #5b82aa;
    animation-delay: 2s;
}

.g5 {
    width: 210px;
    top: 39%;
    left: 72%;
    background: #54b35f;
    animation-delay: 6s;
}

.g6 {
    width: 180px;
    top: 46%;
    left: 20%;
    background: #a8508c;
    animation-delay: 3s;
}

.g7 {
    width: 340px;
    top: 53%;
    left: 52%;
    background: #557daa;
    animation-delay: 9s;
}

.g8 {
    width: 120px;
    top: 61%;
    left: 5%;
    background: #52b16a;
    animation-delay: 5s;
}

.g9 {
    width: 250px;
    top: 67%;
    left: 70%;
    background: #a74f92;
    animation-delay: 8s;
}

.g10 {
    width: 160px;
    top: 73%;
    left: 30%;
    background: #598eaa;
    animation-delay: 2s;
}

.g11 {
    width: 280px;
    top: 79%;
    left: 58%;
    background: #54a85d;
    animation-delay: 6s;
}

.g12 {
    width: 100px;
    top: 86%;
    left: 12%;
    background: #a05291;
    animation-delay: 10s;
}

.g13 {
    width: 220px;
    top: 92%;
    left: 43%;
    background: #5784a8;
    animation-delay: 4s;
}

.g14 {
    width: 170px;
    top: 13%;
    left: 88%;
    background: #50ad67;
    animation-delay: 11s;
}

.g15 {
    width: 300px;
    top: 35%;
    left: 42%;
    background: #a54f91;
    animation-delay: 1s;
}

.g16 {
    width: 130px;
    top: 58%;
    left: 87%;
    background: #5a88a7;
    animation-delay: 7s;
}

.g17 {
    width: 190px;
    top: 70%;
    left: 48%;
    background: #55ae62;
    animation-delay: 5s;
}

.g18 {
    width: 260px;
    top: 81%;
    left: 4%;
    background: #a44d90;
    animation-delay: 9s;
}

.g19 {
    width: 150px;
    top: 28%;
    left: 17%;
    background: #5485a8;
    animation-delay: 3s;
}

.g20 {
    width: 230px;
    top: 49%;
    left: 90%;
    background: #51ad68;
    animation-delay: 12s;
}


/* =====================================================
     GLITCH ANIMATION
     ===================================================== */

@keyframes glitch {

    0%,
    82%,
    100% {
        opacity: 0;

        transform:
            translateX(0) scaleX(1);
    }

    83% {
        opacity: 0.8;

        transform:
            translateX(-40px) scaleX(1.3);
    }

    84% {
        opacity: 0.35;

        transform:
            translateX(55px) scaleX(0.7);
    }

    85% {
        opacity: 0.9;

        transform:
            translateX(-25px) scaleX(1.4);
    }

    86% {
        opacity: 0.45;

        transform:
            translateX(15px) scaleX(0.8);
    }

    87% {
        opacity: 0;
    }

}


/* =====================================================
     DIGITAL FRAGMENTS
     ===================================================== */

.fragment {
    position: absolute;

    height: 4px;

    opacity: 0;

    animation: fragment-glitch 11s steps(1) infinite;
}

.f1 {
    width: 80px;
    top: 18%;
    left: 42%;
    background: #59b46b;
    animation-delay: 2s;
}

.f2 {
    width: 40px;
    top: 31%;
    left: 75%;
    background: #a85591;
    animation-delay: 6s;
}

.f3 {
    width: 120px;
    top: 44%;
    left: 12%;
    background: #548bab;
    animation-delay: 4s;
}

.f4 {
    width: 60px;
    top: 56%;
    left: 62%;
    background: #58b268;
    animation-delay: 9s;
}

.f5 {
    width: 150px;
    top: 64%;
    left: 42%;
    background: #a85091;
    animation-delay: 1s;
}

.f6 {
    width: 45px;
    top: 75%;
    left: 82%;
    background: #5789aa;
    animation-delay: 7s;
}

.f7 {
    width: 100px;
    top: 87%;
    left: 67%;
    background: #55b069;
    animation-delay: 5s;
}

.f8 {
    width: 70px;
    top: 94%;
    left: 28%;
    background: #a75090;
    animation-delay: 10s;
}


@keyframes fragment-glitch {

    0%,
    91%,
    100% {
        opacity: 0;
    }

    92% {
        opacity: 0.8;
        transform: translateX(-20px);
    }

    93% {
        opacity: 0.3;
        transform: translateX(25px);
    }

    94% {
        opacity: 0.7;
        transform: translateX(-10px);
    }

    95% {
        opacity: 0;
    }

}


/* =====================================================
     SPARKLES ✦
     ===================================================== */

.sparkles {
    position: absolute;
    inset: 0;
}

.sparkle {
    position: absolute;

    font-size: 14px;

    color: rgba(143, 30, 107, 0.18);

    opacity: 0;

    text-shadow:
        0 0 6px rgba(190, 220, 255, 0.5);

    animation: sparkle 6s ease-in-out infinite;
}


/* Positions */

.s1 {
    top: 15%;
    left: 23%;
    animation-delay: 1s;
}

.s2 {
    top: 28%;
    left: 82%;
    animation-delay: 4s;
}

.s3 {
    top: 43%;
    left: 8%;
    animation-delay: 6s;
}

.s4 {
    top: 52%;
    left: 68%;
    animation-delay: 2s;
}

.s5 {
    top: 67%;
    left: 38%;
    animation-delay: 7s;
}

.s6 {
    top: 76%;
    left: 91%;
    animation-delay: 3s;
}

.s7 {
    top: 84%;
    left: 18%;
    animation-delay: 5s;
}

.s8 {
    top: 91%;
    left: 73%;
    animation-delay: 9s;
}


@keyframes sparkle {

    0%,
    70%,
    100% {
        opacity: 0;

        transform:
            scale(0.4) rotate(0deg);
    }

    75% {
        opacity: 0.8;

        transform:
            scale(1.2) rotate(20deg);
    }

    82% {
        opacity: 0.4;

        transform:
            scale(0.8) rotate(45deg);
    }

}


/* =====================================================
     REDUCED MOTION
     ===================================================== */

@media (prefers-reduced-motion: reduce) {

    .blob,
    .scanlines,
    .glitch,
    .fragment,
    .sparkle {
        animation: none;
    }

}
</style>
