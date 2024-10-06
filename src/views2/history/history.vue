<template>
    <div class="history">
        <div class="wrapper">
            <div class="content">
                <h1 class="title">History</h1>
                <p class="description description-1">
                    <span class="font-o-med">
                        <span>The James Webb Space Telescope (JWST)</span> is a 
                        state-of-the-art infrared observatory designed to extend our understanding of the universe.
                    </span>
                    <br/>
                    <br/>
                    <span>
                        The JWST project began in the mid-1990s as the Next Generation Space Telescope 
                        <span class="font-o-reg">(NGST)</span>. 
                        It was renamed in 2002 to honor James E. Webb, NASA's administrator during the Apollo program. 
                        After numerous delays and budget increases, the telescope was successfully 
                        launched on December 25, 2021, aboard an Ariane 5 rocket from French Guiana. 
                        It reached its operational orbit at the second Lagrange point (L2) on January 24, 2022.
                    </span>
                </p>
                <h2 class="title">Mission</h2>
                <p class="description description-2 font-o-med">
                    JWST's primary mission goals include: 
                    <br/>
                    <span>First Light and Reionization:</span> Observing the first stars and galaxies formed after the Big Bang. 
                    <br/>
                    Galaxy Formation: Investigating how galaxies assemble and evolve. 
                    <br/>
                    <span>Stellar Evolution:</span> Studying the life cycles of stars and their planetary systems. 
                    <br/>
                    <span>Exoplanet Atmospheres:</span> Analyzing the atmospheres of potentially habitable exoplanets.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">

</script>

<style lang="css" scoped>
.history{
    background-image: url('../../images/history-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #000;
    min-height: 100%;
    padding: 0 0 177px 0;
}
.history .description{
    width: 100%;
  max-width: 1067px;
}
.history .description-1{
    margin: 0 0 82px 0;
}
.history .description-1 span span{
    background: linear-gradient(180deg, #fef40f 0%, #87690f 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.history .description-2 span{
    background: linear-gradient(180deg, #fef40f 0%, #87690f 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>