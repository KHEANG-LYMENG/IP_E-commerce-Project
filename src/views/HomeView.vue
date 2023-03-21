<template>
  <body>
    <div class="padding-top"></div>
    <div class="wrapper">
      <div class="feature-box">
        <div class="picture">
          <img src="../assets/images/download.png" alt="">
        </div>
        <div class="text">
          <h2>Grey Style T-shirt</h2>
          <p>best nylon quality selected</p><br><br>
          <h2>Price : <span style="color: red;">$10:00</span></h2><br><br><br>
          <button class="btn">Add to cart</button>
        </div>
      </div>

  <!--1st row box section-->
      <div class="padding-top"></div>
      <div class="box-block">
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt"></div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <h3>Price: <span>$10.00</span></h3>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt"></div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <h3>Price: <span>$10.00</span></h3>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt"></div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <h3>Price: <span>$10.00</span></h3>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt"></div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <h3>Price: <span>$10.00</span></h3>
          </div>
        </div>
      </div>

  <!--2nd row box section-->
      <div class="padding-top"></div>
      <div class="box-block">
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt"></div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <h3>Price: <span>$10.00</span></h3>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt"></div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <h3>Price: <span>$10.00</span></h3>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt"></div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <h3>Price: <span>$10.00</span></h3>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt"></div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <h3>Price: <span>$10.00</span></h3>
          </div>
        </div>
      </div>

    </div>
  </body>
</template>

<style>
*{
  margin: 0;
}
.padding-left{
  padding-left: 10px;
}
.padding-box{
  padding-top: 20px;
}
.box-block{
  display: flex;
  }
.box{
  background-color: gainsboro;
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
.shirt-price{
  padding-left: 20px;
}

button{
  border-radius: 10px;
  padding: 20px;
  color: whit;
  background-color: blue;
  filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.25)); 

}
body{
  margin: auto;
  width: 100%;
  background-color: white;
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
  background-color: gainsboro;
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
img{
  margin: 40px;
  width: 300px;
  height: 300px;
}
/* .price{
  display: flex;
} */

@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>