<template>
    <div class="view">
        <div class="wrapper">
            <div class="content">
                <h1 class="title font-o-bold">
                    <span>JSWT</span>
                    <br/>
                    3D MODEL
                </h1>
            </div>
        </div>
        <div class="model">
            <telescope-canvas zoom/>
        </div>
    </div>

</template>

<script setup lang="js">
import TelescopeCanvas from "../../components/TelescopeCanvas.vue"
</script>

<style lang="css" scoped>
.view{
    min-height: 100%;
    background-color: #000;
    text-align: center;
}
.view .content{
    padding: 292px 0 0 0;
}
.view h1 span{
    background: linear-gradient(180deg, #fef40f 0%, #87690f 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>