<template>
  <div style="padding-top: 30px;"></div>
    <HeroCard></HeroCard>
    <Carousel></Carousel>
    <div style="padding-top: 30px;"></div>
    <div class="padding-top"></div>

    <!-- <div class="container"> -->

      <div class="feature-box-landing-comment">
        <div class="text-landing-comment">
          
          <h1>Benjamin</h1><br><br>
          <center>
              <p>I wear this jean to work and go out</p>
              <p>weekend it is good and fit with my bosy very</p>
              <p>well</p>
          </center>
        </div>
        <div class="picture-landing">
          <img src="../assets/images/heroesPic/benjamin.jpg" alt="">
        </div>
      </div>
      
      <div class="padding-top"></div>
      <div class="feature-box-landing-comment">
        <div class="text-landing-comment">
          
          <h1>Eddison</h1><br><br>
          <center>
              <p>I wear this cap everywhere i go, and</p>
              <p>it make me look handsome and younger than</p>
              <p>my age</p>
          </center>
        </div>
        <div class="picture-landing">
          <img src="../assets/images/heroesPic/eddison.jpg" alt="">
        </div>
      </div>
    <!-- </div> -->
</template>

<script setup>
  import Card from '../components/Card.vue'
  import HeroCard from '../components/Heroes.vue'
  import SignText from '../components/SignText.vue'
  import Carousel from '../components/Carousel.vue'
</script>
<style scroped>
  .picture-landing{
    width: 50%;
  }
  .picture-landing img{
    margin: 20px;
    width: 90%;
    height: 90%;
  }
  .text-landing-comment{
        width: 50%;
  }
  .feature-box-landing-comment{
      box-shadow: 0 0 30px ;
      align-content: center;
      background-color: whitesmoke;
      width: 100%;
      height: 400px;
      display: flex;
      border-radius: 10px;
  }
</style>
