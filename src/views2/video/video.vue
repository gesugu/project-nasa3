<template>
    <div class="video">
        <div class="wrapper">
            <div class="content">
                <h1>
                    START YOUR JOURNEY AND DISCOVER THE WHOLE UNIVERSE
                </h1>
                <div class="video-containers">
                <div class="video-container">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/ggNpaChp3eI?controls=1" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-container">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/tca-3WrQRK4" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.video{
    min-height: 100%;
    background-color: #000;
    padding: 0 0 173px 0;
}
.video-containers{
    display: flex;
    flex-direction: column;
    gap: 100px;
}
.video h1{
    font-size: 37px;
    font-family: "Outfit-SemiBold";
    margin: 0 0 32px 0;
}
.video .content{
    padding: 236px 0 0 0;
}
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Соотношение сторон 16:9 (9/16 = 0.5625) */
    height: 0;
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>