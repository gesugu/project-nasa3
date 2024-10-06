<template>
    <div class="about">
        <div class="wrapper">
            <div class="content">
                <h1 class="title">About</h1>
                <p class="description description-1">
                    <span class="font-o-bold">WebbView</span>
                     - is an interactive and immersive experience with the 
                     <span>JWST telescope that</span>
                      sparks 
                      <span>curiosity</span> and 
                      <span>wonder</span>, where you can feel like a 
                      <span>space pioneer</span> exploring the depths of space with inspiring music that gives a sense of the 
                      <span>boundless magnitude</span> of the universe
                </p>
                <h2 class="title">Mission</h2>
                <p class="description description-2 font-o-reg">
                    <span>Our mission</span> is to make 
                    <span>JWST</span> discoveries more 
                    <span>accessible</span> and 
                    <span>engaging</span> as we create a captivating visual experience encapsulating the sense of discovery and cosmic awe
                </p>
                <h3 class="subtitle">Getting you closer to 
                    <span>space</span>
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">

</script>

<style lang="css" scoped>
.about{
    background-image: url('../../images/about-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #000;
    min-height: 100%;
    padding: 0 0 483px 0;
}
.about .description{
    width: 100%;
    max-width: 930px;
}
.about .description-1{
    margin: 0 0 98px 0;
}
.about .description-2{
    margin: 0 0 221px 0;
}
.about .description span:not(:first-child){
    background: linear-gradient(180deg, #fef40f 35%, #87690f 87%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Outfit-Regular";
}
.about .subtitle span{
    background: linear-gradient(177deg, #5d5cab 0%, #325281 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>