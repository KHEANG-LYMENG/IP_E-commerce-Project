<template>
  <body>

    <div class="padding-top"></div>
    <div class="wrapper">
      <div class="feature-box">
        <div class="picture">
          <img src="../assets/images/shirt/best.png" alt="">
        </div>
        <div class="text">
          <h2>New T-Shirt</h2>
          <p>best nylon quality selected</p><br><br>
          <h2>Price : <span style="color: red;">$10:00</span></h2><br><br><br>
          <button>Add to cart</button>
        </div>
      </div>

  <!--Hero part-->
      <div class="padding-top"></div>
      <div class="hero">
        <h1>Famous</h1>
      </div>

  <!--1st row box section-->
      <div class="padding-top"></div>
      <div class="box-block">
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="../assets/images/shirt/M1.png" alt="">
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
            <img src="../assets/images/jean/J1.jpg" alt="">
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
            <img src="../assets/images/sneaker/S1.jpg" alt="">
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
            <img src="../assets/images/cap/C1.jpg" alt="">
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
    </div>
    <div class="padding-top"></div>
  </body>
  <Foot></Foot>
</template>

<script setup>
  import Foot from '../components/footer.vue'
</script>

<style>
  *{
    margin: 0;
  }
  .padding-left{
    padding-left: 20px;
  }
  .padding-box{
    padding-top: 20px;
  }
  .box-block{
    display: flex;
  }
  .box{
    box-shadow: 0 0 10px;
    background-color: whitesmoke;
    width: 25%;
    height: 300px;
    border-radius: 10px;
  }
  .box>h2{
    text-align: center;
  }
  .shirt{
    background-color: antiquewhite;
    margin: auto;
    width: 80%;
    height: 60%;
  }
  .shirt img{
    margin: auto;
    width: 100%;
    height: 100%;
  }
  .shirt-price{
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  .text button{
    border-radius: 10px;
    padding: 20px;
    color: white;
    background-color: blue;
    filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.25)); 
    cursor: pointer;
  }
  .text button:hover{
    background-color: rgb(0, 0, 0);
  }
  body{
    margin: auto;
    width: 100%;
    background-color: gainsboro;
  }
  .padding-top{
    padding-top: 30px;
  }
  .wrapper{
    margin: auto;
    width: 90%;
  }
  .feature-box{
    box-shadow: 0 0 30px ;
    align-content: center;
    background-color: whitesmoke;
    width: 100%;
    height: 400px;
    display: flex;
    border-radius: 10px;
  }
  .text{
    padding: 40px;
  }
  .picture{
    width: 50%;
  }
  .picture img{
    margin: 20px;
    width: 90%;
    height: 90%;
  }
  .hero{
    background-color: whitesmoke;
    width: 100%;
    height: 100px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    display: table;
  }
  .hero h1{
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    -webkit-text-stroke: 2px black;
    color: white;
    font-family: Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif;
  }
  /* .price{
    display: flex;
  } */
  /* @media (min-width: 1024px) {
    .home {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
</style>