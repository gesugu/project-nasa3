<template>
    <div class="models">
        <p class="models-p">Planets page</p>
        <div class="model-cards">
        <div v-for="model in models" :key="model.id">
            <div class="model-card">
                <img :src="model.url" alt="Model image" width="300px" height="250px">
                <RouterLink :to="`/model/${model.id}`" class="model-type">{{ model.type }}</RouterLink>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="js">
import {ref, onMounted} from 'vue'
import axios from 'axios';
import { RouterLink } from 'vue-router';

const models = ref([
    {
        id: 1,
        type: 'Planets of the solar system',
        url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg'
    },
    {
        id: 2,
        type: 'Stars',
        url: 'https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg'
    },
    {
        id: 3,
        type: 'Satellites',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Callisto.jpg/472px-Callisto.jpg'
    },
    {
        id: 4,
        type: 'Dwarf Planets',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Ro9WnlzCnIKbWtkwQeyLfm8oL5GqS0Sr-Q&s'
    },
    {
        id: 5,
        type: 'Exoplanets',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSASJMQs78J-G8vca_sIuH-jQM9vSzuznNHQ&s'
    },
    {
        id: 6,
        type: 'Asteroids and Comets',
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Vesta_in_natural_color.jpg'
    },
])
</script>

<style lang="css" scoped>
.models-p{
    font-size: 40px;
    color: white;
    position: relative;
    margin-top: 70px;
    margin-left: 10px;
    left: 0;
}
.models{
    margin: 0;
    padding: 0;
    width: 1240px;
    height: 800px;
    background-color: #2a1f5f;
}
.model-card{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.model-type{
    width: 300px;
    height: 40px;
    background-color: rgb(148, 15, 15);
    list-style: none;
    text-decoration: none;
    color: white;
    font-size: 24px;
    text-align: center;
}
.model-cards{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 80px;
    margin-top: 30px;
}
</style>