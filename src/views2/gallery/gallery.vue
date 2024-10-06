<template>
    <div class="gallery">
        <div class="wrapper">
            <div class="content">
                <h1 class="title">Gallery</h1>
                <div class="gallery-images">
                    <div class="gallery-card stars">
                        <div class="gallery-controlls">
                            <span>
                                <button class="btn-slider btn-slider--next" @click="nextImageStars">
                                    <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6295 34.1447L17.6203 37.151L1.23017 20.7665C0.965971 20.504 0.756298 20.1918 0.61322 19.8479C0.470141 19.504 0.396483 19.1353 0.396483 18.7628C0.396483 18.3903 0.470142 18.0215 0.61322 17.6777C0.756298 17.3338 0.965971 17.0216 1.23017 16.759L17.6203 0.36606L20.6266 3.37239L5.24333 18.7585L20.6295 34.1447Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </span>
                            <span>
                                <button class="btn-slider btn-slider--prev" @click="prevImageStars">
                                    <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.921783 3.37237L3.93095 0.366047L20.3211 16.7505C20.5853 17.0131 20.795 17.3253 20.938 17.6691C21.0811 18.013 21.1548 18.3818 21.1548 18.7543C21.1548 19.1267 21.0811 19.4955 20.938 19.8394C20.795 20.1833 20.5853 20.4955 20.3211 20.758L3.93095 37.151L0.92462 34.1447L16.3079 18.7585L0.921783 3.37237Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                        <div class="model-card" v-if="stars.length > 0">
                            <img class="img" :src="stars[currentIndexStars].img" width="100px" height="" alt="model image">
                            <p>{{ stars[currentIndexStars].title }}</p>
                        </div>
                    </div>
                    <div class="gallery-card exoplanets">
                        <div class="gallery-controlls">
                            <span>
                                <button class="btn-slider btn-slider--next" @click="nextImageExoPlanets">
                                    <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6295 34.1447L17.6203 37.151L1.23017 20.7665C0.965971 20.504 0.756298 20.1918 0.61322 19.8479C0.470141 19.504 0.396483 19.1353 0.396483 18.7628C0.396483 18.3903 0.470142 18.0215 0.61322 17.6777C0.756298 17.3338 0.965971 17.0216 1.23017 16.759L17.6203 0.36606L20.6266 3.37239L5.24333 18.7585L20.6295 34.1447Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </span>
                            <span>
                                <button class="btn-slider btn-slider--prev" @click="prevImageExoPlanets">
                                    <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.921783 3.37237L3.93095 0.366047L20.3211 16.7505C20.5853 17.0131 20.795 17.3253 20.938 17.6691C21.0811 18.013 21.1548 18.3818 21.1548 18.7543C21.1548 19.1267 21.0811 19.4955 20.938 19.8394C20.795 20.1833 20.5853 20.4955 20.3211 20.758L3.93095 37.151L0.92462 34.1447L16.3079 18.7585L0.921783 3.37237Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                        <div class="model-card" v-if="exoplanets.length > 0">
                            <img class="img" :src="exoplanets[currentIndexExoPlanets].img" width="100px" height="" alt="model image">
                            <p>{{ exoplanets[currentIndexExoPlanets].title }}</p>
                        </div>
                    </div>
                    <div class="gallery-card nebulas">
                        <div class="gallery-controlls">
                            <span>
                                <button class="btn-slider btn-slider--next" @click="nextImageNebulas">
                                    <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6295 34.1447L17.6203 37.151L1.23017 20.7665C0.965971 20.504 0.756298 20.1918 0.61322 19.8479C0.470141 19.504 0.396483 19.1353 0.396483 18.7628C0.396483 18.3903 0.470142 18.0215 0.61322 17.6777C0.756298 17.3338 0.965971 17.0216 1.23017 16.759L17.6203 0.36606L20.6266 3.37239L5.24333 18.7585L20.6295 34.1447Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </span>
                            <span>
                                <button class="btn-slider btn-slider--prev" @click="prevImageNebulas">
                                    <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.921783 3.37237L3.93095 0.366047L20.3211 16.7505C20.5853 17.0131 20.795 17.3253 20.938 17.6691C21.0811 18.013 21.1548 18.3818 21.1548 18.7543C21.1548 19.1267 21.0811 19.4955 20.938 19.8394C20.795 20.1833 20.5853 20.4955 20.3211 20.758L3.93095 37.151L0.92462 34.1447L16.3079 18.7585L0.921783 3.37237Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                        <div class="model-card" v-if="nebulas.length > 0">
                            <img class="img" :src="nebulas[currentIndexNebulas].img" width="100px" height="" alt="model image">
                            <p>{{ nebulas[currentIndexNebulas].title }}</p>
                        </div>
                    </div>
                    <div class="gallery-card galaxies">
                        <div class="gallery-controlls">
                            <span>
                                <button class="btn-slider btn-slider--next" @click="nextImageGalaxies">
                                    <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6295 34.1447L17.6203 37.151L1.23017 20.7665C0.965971 20.504 0.756298 20.1918 0.61322 19.8479C0.470141 19.504 0.396483 19.1353 0.396483 18.7628C0.396483 18.3903 0.470142 18.0215 0.61322 17.6777C0.756298 17.3338 0.965971 17.0216 1.23017 16.759L17.6203 0.36606L20.6266 3.37239L5.24333 18.7585L20.6295 34.1447Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </span>
                            <span>
                                <button class="btn-slider btn-slider--prev" @click="prevImageGalaxies">
                                    <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.921783 3.37237L3.93095 0.366047L20.3211 16.7505C20.5853 17.0131 20.795 17.3253 20.938 17.6691C21.0811 18.013 21.1548 18.3818 21.1548 18.7543C21.1548 19.1267 21.0811 19.4955 20.938 19.8394C20.795 20.1833 20.5853 20.4955 20.3211 20.758L3.93095 37.151L0.92462 34.1447L16.3079 18.7585L0.921783 3.37237Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                        <div class="model-card" v-if="galaxies.length > 0">
                            <img class="img" :src="galaxies[currentIndexGalaxies].img" width="100px" height="" alt="model image">
                            <p>{{galaxies[currentIndexGalaxies].title}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import {ref, onMounted} from 'vue'
import axios from 'axios';
import { RouterLink } from 'vue-router';

const stars = ref([
    {
        id: 1,
        title: 'stars',
        img: 'https://stsci-opo.org/STScI-01HZ5D4WB7KD8FX3VPTAKR7P9H.png',
    },
    {
        id: 2,
        title: 'stars',
        img: 'https://images-assets.nasa.gov/image/PIA22081/PIA22081~medium.jpg',
    },
    {
        id: 3,
        title: 'stars',
        img: 'https://stsci-opo.org/STScI-01J3DHNNK8J612Z1DJCZRKBTB0.png',
    },
])
const exoplanets = ref([
    {
        id: 1,
        title: 'exoplanets',
        img: 'https://stsci-opo.org/STScI-01GVGGMG8C35QBRDY1T61F4F1C.jpg',
    },
    {
        id: 2,
        title: 'exoplanets',
        img: 'https://stsci-opo.org/STScI-01GJ3Q0VY3708TBE4KGSAMXBWB.jpg',
    },
    {
        id: 3,
        title: 'exoplanets',
        img: 'https://stsci-opo.org/STScI-01H9R88YF49TAZJH32J2RFHN20.jpg',
    },
])
const nebulas = ref([
    {
        id: 1,
        title: 'nebulas',
        img: 'https://science.nasa.gov/wp-content/uploads/2023/09/pia23865-2.jpg?w=1536&format=webp',
    },
    {
        id: 2,
        title: 'nebulas',
        img: 'https://science.nasa.gov/wp-content/uploads/2023/09/nustar140219a-1.jpg?w=1536&format=webp',
    },
    {
        id: 3,
        title: 'nebulas',
        img: 'https://science.nasa.gov/wp-content/uploads/2023/09/rcw120-threecolor-with-star-final.png?w=1536&format=webp',
    },
])
const galaxies = ref([
    {
        id: 1,
        title: 'galaxies',
        img: 'https://stsci-opo.org/STScI-01H5MXFEW1EWAZPFARJT77QW42.jpg',
    },
    {
        id: 2,
        title: 'galaxies',
        img: 'https://stsci-opo.org/STScI-01HWQYVDYKAN7WPCR0YRVCAJG0.png',
    },
    {
        id: 3,
        title: 'galaxies',
        img: 'https://stsci-opo.org/STScI-01HW67KNA4439D1FXA3VGR868T.jpg',
    },
])

const currentIndexStars = ref(0)
const currentIndexExoPlanets = ref(0)
const currentIndexNebulas = ref(0)
const currentIndexGalaxies = ref(0)

const nextImageStars = () => {
    currentIndexStars.value = (currentIndexStars.value + 1) % stars.value.length
}

const prevImageStars = () => {
    currentIndexStars.value = (currentIndexStars.value - 1 + stars.value.length) % stars.value.length
}

const nextImageExoPlanets = () => {
    currentIndexExoPlanets.value = (currentIndexExoPlanets.value + 1) % exoplanets.value.length
}
const prevImageExoPlanets = () => {
    currentIndexExoPlanets.value = (currentIndexExoPlanets.value - 1 + exoplanets.value.length) % exoplanets.value.length
}

const nextImageNebulas = () => {
    currentIndexNebulas.value = (currentIndexNebulas.value + 1) % nebulas.value.length
}
const prevImageNebulas = () => {
    currentIndexNebulas.value = (currentIndexNebulas.value - 1 + nebulas.value.length) % nebulas.value.length
}

const nextImageGalaxies = () => {
    currentIndexGalaxies.value = (currentIndexGalaxies.value + 1) % galaxies.value.length
}
const prevImageGalaxies = () => {
    currentIndexGalaxies.value = (currentIndexGalaxies.value - 1 + galaxies.value.length) % galaxies.value.length
}
</script>

<style lang="css" scoped>
.gallery{
    background-color: black;
    padding: 0 0 204px 0;
}

.img{
    width: 114%;
    height: auto;
}
.gallery-card{
    position: relative;
}
.gallery-controlls{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 18px;
    right: 18px;
    display: flex;
    align-items: center;
    height: 0;
    margin: auto;
    justify-content: space-between;
}
.btn-slider{
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1);
}
.btn-slider svg{
    color: #ae9137;
    transition: 0.3s;
}

.btn-slider:hover svg{
    transform: scale(1.2);
    color: #cab983;
}
.model-card{
    width: 478px;
    height: 303px;
    overflow: hidden;
    border: 1.5px solid #87690F;
    border-radius: 30px;
    display: flex;
    align-items: center;
}
.gallery-images{
    display: flex;
    flex-wrap: wrap;
    gap: 183px 150px;
}
.stars .model-card{
    justify-content: center;
}
.stars img{
    width: 190%;
}
</style>