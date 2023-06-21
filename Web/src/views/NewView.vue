<template>
  <div class="wrapper">
  <div class="padding-top"></div>
      <div class="hero">
        <h1>NEW</h1>
      </div>

  <!--1st row box section-->
      <div class="padding-top"></div>
      <div class="box-block">
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/shirt/best.png" alt="">
          </div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/jean/J4.jpg" alt="">
          </div>
          <h2 class="shirt-name">Jean</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/sneaker/S4.jpg" alt="">
          </div>
          <h2 class="shirt-name">Sneaker</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/cap/C4.jpg" alt="">
          </div>
          <h2 class="shirt-name">Cap</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
      </div>
  <!--2nd row box section-->
      <div class="padding-top"></div>
      <div class="box-block">
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/shirt/M3.jpg" alt="">
          </div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/jean/J3.jpg" alt="">
          </div>
          <h2 class="shirt-name">Jean</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/sneaker/S3.jpg" alt="">
          </div>
          <h2 class="shirt-name">Sneaker</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/cap/C3.jpg" alt="">
          </div>
          <h2 class="shirt-name">Cap</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
      </div>

    <!--3rd row box section-->
      <div class="padding-top"></div>
      <div class="box-block">
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/shirt/M2.jpg" alt="">
          </div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/jean/J2.jpg" alt="">
          </div>
          <h2 class="shirt-name">Jean</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/sneaker/S2.jpg" alt="">
          </div>
          <h2 class="shirt-name">Sneaker</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/cap/C2.jpg" alt="">
          </div>
          <h2 class="shirt-name">Cap</h2><br>
          <div class="shirt-price">
            <div>Price: </div>
            <div>$10:00</div>
          </div>
        </div>
      </div>
      <div class="padding-top"></div>
      <center><div class="LoadMore">Load More</div></center>
    </div>
    <div class="padding-top"></div>
    <Foot></Foot>
</template>

<script setup>
  import Foot from '../components/footer.vue'
</script>

<style>
.LoadMore{
  border: 1px solid black;
  border-radius: 10px;
  width: 10%;
  background-color: aliceblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
}
.LoadMore:hover{
  color: white;
  background-color: dodgerblue;
  cursor: pointer;
}
@media (min-width: 1024px) {
  .about{
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
