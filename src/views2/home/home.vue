<template>
    <div class="mains">
        <div class="wrapper">
            <div class="content">
                <h1 class="title">Ready?</h1>
                <p class="description">
                    Feel like a pioneer with the 
                    <br/>
                    <span>JWST telescope</span> and fly 
                    <br/>
                    through the whole cosmos
                </p>
                <RouterLink to="/video">
                    <button class="btn">GO ON A JOURNEY
                        <svg width="23" height="41" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.560295 3.2883L3.83171 0.0199738L21.6503 17.8324C21.9375 18.1178 22.1655 18.4572 22.321 18.8311C22.4766 19.2049 22.5566 19.6058 22.5566 20.0108C22.5566 20.4157 22.4766 20.8166 22.321 21.1905C22.1655 21.5643 21.9375 21.9037 21.6503 22.1891L3.83171 40.0108L0.563377 36.7425L17.2874 20.0154L0.560295 3.2883Z" fill="black" />
                        </svg>
                    </button>
                </RouterLink>
                <RouterView></RouterView>
                <div class="mains__image">
                    <img src="https://img.freepik.com/premium-photo/generative-ai-illustration-portrait-astronaut-looking-planet-earth-through-window-from-spaceship-space-navigation-concept_58460-21474.jpg" width="455" height="590px" alt="">
                </div>
            </div>
        </div>
        <div class="model">
            <telescope-canvas />
        </div>
    </div>
</template>

<script setup lang="js">
import TelescopeCanvas from "../../components/TelescopeCanvas.vue"
</script>

<style lang="css" scoped>
.mains{
    background-image: url('../../images/main-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    min-height: 100%;
    background-color: #000;
}
.mains__image{
    position: absolute;
    top: 311px;
    right: 0;
}
.mains__image img{
    border-radius: 100px;
    border: 1px solid #fef40f;
}
.mains .content{
    position: relative;
}
.mains .content{
    position: relative;
}
.mains .description{
    margin: 0 0 118px 0;
}
.mains .description span{
    background: linear-gradient(90deg, #fffc1c 0%, #665208 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>