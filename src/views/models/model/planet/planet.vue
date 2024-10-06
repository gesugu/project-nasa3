<template>
    <div class="planet">
        <h3>planet page</h3>
        <p v-if="filteredPlanetsTwo.length" class="model-p-planet">{{filteredPlanetsTwo.type}}</p>
        <img :src="filteredPlanetsTwo.url" alt="" width="300px" height="250px">
        <p>{{filteredPlanetsTwo.name}}</p>
    </div>
</template>

<script setup lang="js">
import {ref, onMounted, computed} from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';
import { RouterLink } from 'vue-router';

const planetsTwo = ref([
{
        id: 1,
        name: 'Earth',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 2,
        name: 'Mars',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 3,
        name: 'Venus',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 4,
        name: 'Mercury',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 5,
        name: 'Jupiter',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 6,
        name: 'Saturn',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 7,
        name: 'Uranus',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 8,
        name: 'Neptune',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },


    {
        id: 9,
        name: 'Sun',
        type: 'Stars',
        group: 2,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 10,
        name: 'Vega',
        type: 'Stars',
        group: 2,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 11,
        name: 'Polaris',
        type: 'Stars',
        group: 2,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 12,
        name: 'Sirius',
        type: 'Stars',
        group: 2,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 13,
        name: 'Betelgeuse',
        type: 'Stars',
        group: 2,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 14,
        name: 'Altair',
        type: 'Stars',
        group: 2,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 15,
        name: 'Moon',
        type: 'Satellites',
        group: 3,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 16,
        name: 'Fobos',
        type: 'Satellites',
        group: 3,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 17,
        name: 'Deimos',
        type: 'Satellites',
        group: 3,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 18,
        name: 'Callisto',
        type: 'Satellites',
        group: 3,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 19,
        name: 'Io',
        type: 'Satellites',
        group: 3,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 20,
        name: 'Ganymede',
        type: 'Satellites',
        group: 3,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 21,
        name: 'Titan',
        type: 'Satellites',
        group: 3,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 22,
        name: 'Enceladus',
        type: 'Satellites',
        group: 3,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 23,
        name: 'Europe',
        type: 'Satellites',
        group: 3,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },


    {
        id: 24,
        name: 'Pluto',
        type: 'Dwarf Planets',
        group: 4,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 25,
        name: 'Ceres',
        type: 'Dwarf Planets',
        group: 4,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 26,
        name: 'Haumea',
        type: 'Dwarf Planets',
        group: 4,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 27,
        name: 'Eris',
        type: 'Dwarf Planets',
        group: 4,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 28,
        name: 'Make Make',
        type: 'Dwarf Planets',
        group: 4,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },


    {
        id: 29,
        name: '51 Pegasi B',
        type: 'Exoplanets',
        group: 5,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 30,
        name: 'Kepler-22b',
        type: 'Exoplanets',
        group: 5,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 31,
        name: 'Proxima Centauri b',
        type: 'Exoplanets',
        group: 5,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },


    {
        id: 32,
        name: 'Palas',
        type: 'Asteroids and Comets',
        group: 6,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 33,
        name: 'Vesta',
        type: 'Asteroids and Comets',
        group: 6,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 34,
        name: '433 eros',
        type: 'Asteroids and Comets',
        group: 6,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 35,
        name: 'Halley',
        type: 'Asteroids and Comets',
        group: 6,
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
])

const route = useRoute()

const filteredPlanetsTwo = computed(() => {
    const id = parseInt(route.params.id)
    return planetsTwo.value.find(planets => planets.id === id)
})
</script>

<style lang="css" scoped>
.planet{
    margin: 0;
    padding: 0;
    width: 1240px;
    height: 800px;
    background-color: #2a1f5f;
}
.model-p-planet{
    font-size: 40px;
    color: white;
    position: relative;
    margin-top: 70px;
    margin-left: 10px;
    left: 0;
}
</style>