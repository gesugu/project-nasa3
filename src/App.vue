<template>
  <div class="navbar">
    <h1>
      <a href="/">WEBBVIEW</a>
    </h1>
    <div class="music-option">
      <select class="font-s-25" @change="playAudio">
        <option value="./src/views2/audio2/Endless Space (1) (1).mp3">select music - Galaxies' melody</option>
        <option value="./src/views2/audio2/Journey to the Stars.mp3">Rhythms of the stars</option>
        <option value="./src/views2/audio2/Celestial Journey (1).mp3">Chronicles of the stars</option>
        <option value="./src/views2/audio2/Celestial Journey (2).mp3">Space ballad</option>
        <option value="./src/views2/audio2/Endless Space (3).mp3">Serenity of space</option>
      </select>
    </div>
    <RouterLink to="/gallery" class="router-link font-s-25">Gallery</RouterLink>
    <RouterLink to="/about" class="router-link font-s-25">About</RouterLink>
    <RouterLink to="/view" class="router-link font-s-25">View</RouterLink>
    <RouterLink to="/history" class="router-link font-s-25">History</RouterLink>
    <div class="audio-div">
    <audio controls v-if="currentAudio">
    <source :src="currentAudio" type="audio/mp3" />
    Your browser does not support the audio element.
    </audio>
    </div>
  </div>
  <!-- <audio controls v-if="currentAudio">
    <source :src="currentAudio" type="audio/mp3" />
    Your browser does not support the audio element.
  </audio> -->

  <RouterView></RouterView>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
const currentAudio = ref('')
const playAudio = (event) => {
  const selectedAudio = event.target.value
  if(selectedAudio){
    currentAudio.value = selectedAudio
  }
  const audioPlayer = document.querySelector('audio')
  audioPlayer.load()
  audioPlayer.play()
}
</script>

<style lang="css" scoped>
h1 a{
  font-family: "Outfit-Medium";
  font-weight: 500;
  font-size: 30px;
  color: #fff;
}
input{
  width: 400px;
  height: 35px;
  font-size: 20px;
}
.router-link{
  text-decoration: none;
  color: white;
  font-family: "Outfit-ExtraLight";
  background: transparent;
  transition: transform 0.3s, filter 0.3s;
  padding: 10px;
  position: relative;
}
.router-link:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    transition: width 0.3s, left 0.3s;
    background: linear-gradient(to right, rgba(107, 107, 107, 0) 0%, #6b6b6b 50%, rgba(107, 107, 107, 0) 100%)
}
.router-link:hover{
    transform: scale(1.1);
    filter: brightness(0.8);
}
.router-link:hover:before{
    transform: scale(1.1);
    filter: brightness(0.8);
    width: 100%;
    left: 0;
}
.router-link.router-link-exact-active{
    text-shadow: #f1e536 0px -5px 12px;
    color: #e1d600;
}
.router-link.router-link-exact-active:before{
    width: 100%;
    left: 0;
}
.router-link.router-link-exact-active:hover:before{
    background: linear-gradient(to right, rgba(254, 242, 15, 0) 0%, #FEF40F 50%, rgba(254, 242, 15, 0) 100%);
}
#app .navbar{
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
	max-width: 1166px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  box-sizing: border-box;
  margin: 53px auto 0 auto;
	padding: 0 20px;
}
.music-option select{
  background-color: transparent;
  border: none;
  color: white;
  width: 196px;
  cursor: pointer;
}
.music-option{
  position: relative;
  z-index: 1;
  font-size: 22px;
}
.music-option::before{
  position: absolute;
  z-index: 1;
  content: "";
  left: 0;
  right: 0;
  bottom: -7px;
  height: 1px;
  background-color: white;
}

option{
  color: white;
  background-color: transparent;
  background-color: black;
}
#app{
  position: relative;
  height: 100%;
}
.audio-div{
  border-radius: 25px;
  width: 20vw;
  height: 8vh;
  background-color: darkgoldenrod;
}
audio{
  border: darkgoldenrod;
  border-radius: 25px;
  background-color: darkgoldenrod;
  margin-left: 5px;
  margin-top: 5px;
}
</style>