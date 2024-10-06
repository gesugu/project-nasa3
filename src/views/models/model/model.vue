<template>
    <div class="model">
        <p v-if="filteredPlanets.length" class="model-p-two">{{filteredPlanets[0].type}}</p>
        <div class="model-cards-two">
        <div v-for="planet in filteredPlanets" :key="planet.id" class="planet-card">
            <div class="model-card-two">
            <img :src="planet.url" alt="" width="300px" height="250px">
            <RouterLink :to="`/planet/${planet.id}`" class="model-type-two">{{planet.name}}</RouterLink>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="js">
import {ref, onMounted, computed} from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';
import { RouterLink } from 'vue-router';

const planets = ref([
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
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/MARS_THE_RED_PLANET.jpg/800px-MARS_THE_RED_PLANET.jpg'
    },
    {
        id: 3,
        name: 'Venus',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/1024px-Venus_globe.jpg'
    },
    {
        id: 4,
        name: 'Mercury',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Reprocessed_Mariner_10_image_of_Mercury.jpg'
    },
    {
        id: 5,
        name: 'Jupiter',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter.jpg/480px-Jupiter.jpg'
    },
    {
        id: 6,
        name: 'Saturn',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://media.istockphoto.com/id/480019224/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B0%D1%82%D1%83%D1%80%D0%BD.jpg?s=612x612&w=0&k=20&c=J_WUoRo0jTgPGW3wjpON6m2neaGsxYvgYG1uAJ7a8nQ='
    },
    {
        id: 7,
        name: 'Uranus',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://t4.ftcdn.net/jpg/07/10/50/81/360_F_710508129_yUijVF6xFuepY0u9JJ3MU6mOUaB8v4gO.jpg'
    },
    {
        id: 8,
        name: 'Neptune',
        type: 'Planets of the Solar System',
        group: 1,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/800px-Neptune_Full.jpg'
    },


    {
        id: 9,
        name: 'Sun',
        type: 'Stars',
        group: 2,
        url: 'https://media.istockphoto.com/id/1198303044/photo/betelgeuse-star-against-starry-sky-artistic-vision-elements-of-this-image-furnished-by-nasa.jpg?s=612x612&w=0&k=20&c=EJ51PqA6JOAvB9SYhDZm4NSyHkRNfp6ND4p6d5uoE9w='
    },
    {
        id: 10,
        name: 'Vega',
        type: 'Stars',
        group: 2,
        url: 'https://miro.medium.com/v2/resize:fit:1200/1*I3D-Y8yMScEImd7Ja_ofzw.jpeg'
    },
    {
        id: 11,
        name: 'Polaris',
        type: 'Stars',
        group: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQifR-hOykqYA9AOMe5ZIeufwxoZwz94m7QAw&s'
    },
    {
        id: 12,
        name: 'Sirius',
        type: 'Stars',
        group: 2,
        url: 'https://static.wikia.nocookie.net/ultra-nasa-fanon/images/e/e9/White_Star.jpg/revision/latest?cb=20170511030837'
    },
    {
        id: 13,
        name: 'Betelgeuse',
        type: 'Stars',
        group: 2,
        url: 'https://science.nasa.gov/wp-content/uploads/2023/06/may102022-x1pt5flare-171-131-304-jpg.webp?w=4096&format=png'
    },
    {
        id: 14,
        name: 'Altair',
        type: 'Stars',
        group: 2,
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Altair.jpg'
    },


    {
        id: 15,
        name: 'Moon',
        type: 'Satellites',
        group: 3,
        url: 'https://storage.googleapis.com/p-oaf-ibe-back-00e-strapi-uploads/.dzi/cd0652-1734573-PliadesNeo-TheMoonjpg/thumbnail.jpeg'
    },
    {
        id: 16,
        name: 'Fobos',
        type: 'Satellites',
        group: 3,
        url: 'https://www.shutterstock.com/image-photo/phobos-moon-universe-solar-system-260nw-2376137309.jpg'
    },
    {
        id: 17,
        name: 'Deimos',
        type: 'Satellites',
        group: 3,
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Deimos-MRO.jpg'
    },
    {
        id: 18,
        name: 'Callisto',
        type: 'Satellites',
        group: 3,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Callisto.jpg/640px-Callisto.jpg'
    },
    {
        id: 19,
        name: 'Io',
        type: 'Satellites',
        group: 3,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Io_highest_resolution_true_color.jpg/274px-Io_highest_resolution_true_color.jpg'
    },
    {
        id: 20,
        name: 'Ganymede',
        type: 'Satellites',
        group: 3,
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Ganymede%2C_moon_of_Jupiter%2C_NASA.jpg'
    },
    {
        id: 21,
        name: 'Titan',
        type: 'Satellites',
        group: 3,
        url: 'https://media.wired.com/photos/5dd85094a0926f0008a865a2/master/w_1600%2Cc_limit/PIA20016_orig.jpg'
    },
    {
        id: 22,
        name: 'Enceladus',
        type: 'Satellites',
        group: 3,
        url: 'https://science.nasa.gov/wp-content/uploads/2023/07/PIA11133.jpg?w=4096&format=jpeg'
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
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9KdBNZC79YYSi1sOH_eq579rND8XAdVzRQ&s'
    },
    {
        id: 25,
        name: 'Ceres',
        type: 'Dwarf Planets',
        group: 4,
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg'
    },
    {
        id: 26,
        name: 'Haumea',
        type: 'Dwarf Planets',
        group: 4,
        url: 'https://www.universetoday.com/wp-content/uploads/2022/10/7871.jpg'
    },
    {
        id: 27,
        name: 'Eris',
        type: 'Dwarf Planets',
        group: 4,
        url: 'https://media.istockphoto.com/id/1044815536/photo/eris-dwarf-planet-rotating-in-its-own-orbit-in-the-outer-space-3d-rendering.jpg?s=612x612&w=0&k=20&c=Al9kudP44VCmYa_J7GPbZOsPQ8vhlQeyBBMiAO_LRTc='
    },
    {
        id: 28,
        name: 'Make Make',
        type: 'Dwarf Planets',
        group: 4,
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Makemake_%28Dwarf_Planet%29.jpg'
    },


    {
        id: 29,
        name: '51 Pegasi B',
        type: 'Exoplanets',
        group: 5,
        url: 'https://compote.slate.com/images/9b5dca6e-a8d1-4cdf-9c5d-a03cc4f1d876.jpg'
    },
    {
        id: 30,
        name: 'Kepler-22b',
        type: 'Exoplanets',
        group: 5,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kepler22b-artwork.jpg/800px-Kepler22b-artwork.jpg'
    },
    {
        id: 31,
        name: 'Proxima Centauri b',
        type: 'Exoplanets',
        group: 5,
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Proxima_Centauri_b.jpg'
    },


    {
        id: 32,
        name: 'Palas',
        type: 'Asteroids and Comets',
        group: 6,
        url: 'https://science.nasa.gov/wp-content/uploads/2023/09/AsteroidPallas1000w.jpg?w=1000'
    },
    {
        id: 33,
        name: 'Vesta',
        type: 'Asteroids and Comets',
        group: 6,
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Vesta_in_natural_color.jpg'
    },
    {
        id: 34,
        name: '433 eros',
        type: 'Asteroids and Comets',
        group: 6,
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Eros_-_PIA02923_%28color%29.jpg'
    },
    {
        id: 35,
        name: 'Halley',
        type: 'Asteroids and Comets',
        group: 6,
        url: 'https://cdn.mos.cms.futurecdn.net/zzCKzkAndgXbTKNoKCUqu9-1200-80.jpg'
    },
])

const route = useRoute()

const filteredPlanets = computed(() => {
    const id = parseInt(route.params.id)
    return planets.value.filter(planets => planets.group === id)
})
</script>

<style lang="css" scoped>
.model-cards-two{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 80px;
    margin-top: 30px;
}
.model-card-two{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.model{
    margin: 0;
    padding: 0;
    width: 1240px;
    height: 1200px;
    background-color: #2a1f5f;
}
.model-type-two{
    width: 300px;
    height: 40px;
    background-color: rgb(148, 15, 15);
    list-style: none;
    text-decoration: none;
    color: white;
    font-size: 24px;
    text-align: center;
}
.model-p-two{
    font-size: 40px;
    color: white;
    position: relative;
    margin-top: 70px;
    margin-left: 10px;
    left: 0;
}
</style>