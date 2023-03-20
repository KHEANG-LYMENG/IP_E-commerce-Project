<template>
  <body>
    
  
    <div class="feature-box">
      <div class="picture">
        <img src="../assets/images/download." alt="">
      </div>
      <div class="text">
        <h2>Grey Style T-shirt</h2>
        <p>best nylon quality selected</p><br><br>
        <h2>Price : $10:00</h2>
      </div>
    </div>
  </body>
</template>

<style>
*{
  margin: 0;
}
body{
  background-color: white;
}
.feature-box{
  box-shadow: 0 0 50px skyblue;
  align-content: center;
  background-color: gainsboro;
  width: 80%;
  height: 200px;
  margin: 30px;
  display: flex;
  border-radius: 10px;
}
.picture{
  margin: 10px;
  width: 50%;
  height: 50%;
}
/* .price{
  display: flex;
} */

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>