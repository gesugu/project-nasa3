<template>
    <div class="mains">
        <h2>Home page</h2>
        <h3>SPACE<br> 3D<br> MODELS<br></h3>
        <div class="line">
            <h1>Welcome to orbita 3d models <br> unveil tne Universe with Orbita-3d - <br> explore planets and stars in 3d</h1>
        </div>
    </div>
</template>

<script setup lang="js"></script>

<style lang="css" scoped>
html,body{
    margin: 0;
    padding: 0;
    height: 100%;
}
.mains{
    display: flex;
    flex-direction: column;
    background-image: url('https://novyny.live/cdn-cgi/imagedelivery/4_JwVYxosZqzJ7gIDJgTLA/e68bc7f9-c34f-4321-9cf9-f88c0fc43300/16x9');
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* z-index: 500; */
    box-sizing: border-box;
}
h2{
    font-size: 25px;
    font-weight: bold;
    color: white;
}
h3{
    font-size: 45px;
    font-weight: bold;
    color: white;
    letter-spacing: 4px;
    margin-top: 30px;
}
.line{
    flex: 1;
    width: 100%;
    height: 3000vh;
    background-color: #2d2456;
    padding: 20px;
    /* margin-top: 150px; */
}
h1{
    position: relative;
    color: white;
    font-size: 40px;
    letter-spacing: 2px;
    font-weight: bold;
}
</style>