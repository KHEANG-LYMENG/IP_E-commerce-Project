<template>
    <div class="container">
      <div class="row feature-box-landing">
        <div class="col-md-6 picture-landing">
          <img src="../assets/images/heroesPic/H1.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-md-6 text-center text-landing-comment">
          <h1>Get Ready !!</h1><br><br>
          <h2>Fresh Start with New Season</h2>
          <h2>With Special Discount</h2><br><br>
          <h2>Up To <span style="color: red;">%20 off</span></h2><br><br><br>
          <button style="background-color: blue; color: white;" ><router-link to="/home" class="switch">SHOP NOW</router-link></button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .feature-box-landing {
      box-shadow: 0 0 30px;
      background-color: rgb(124, 201, 9);
      border-radius: 10px;
    }
    .text-landing-comment {
      padding: 40px;
    }
    .picture-landing img {
      margin: 20px;
      width: 90%;
      height: 90%;
    }
  </style>
  