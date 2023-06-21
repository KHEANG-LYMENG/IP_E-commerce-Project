<template>
    <body>
  
      <div class="padding-top"></div>
      <div class="wrapper">
        <div class="feature-box-landing">
          <div class="picture-landing">
            <img src="../assets/images/heroesPic/H1.jpg" alt="">
          </div>
          <div class="text-landing-comment">
            <center>
                <h1>Get Ready !!</h1><br><br>
                <h2>Fresh Start with New Season</h2>
                <h2>With Special Discount</h2><br><br>
                <h2>Up To <span style="color: red;">%20</span></h2><br><br><br>
                <button style="background-color: blue;"><router-link to="/home" class="switch">SHOP NOW</router-link></button>
            </center>
          </div>
        </div>

        <div class="padding-top"></div>

        <center>
            <div class="Slider" style="background-color: whitesmoke; border-radius: 10px; box-shadow: 0 0 10px;">
                <div class="picture-landing" style="display: flex; align-items: center;">
                    <button @click="prevImage">Prev</button>
                    <img :src="images[currentImage]" alt="" style="height: 300px; width: 500px;">
                    <button @click="nextImage">Next</button>
                </div>
            </div>
        </center>

<!--Comment part-->
        <div class="padding-top"></div>
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
<!--End comment part-->
      </div>
      <div class="padding-top"></div>
    </body>
    <div class="footer">
      <h1>LMK</h1>
    </div>
    <Foot></Foot>
  </template>

  <script>
    import Foot from '../components/footer.vue'
    export default {
    data() {
        return {
            currentImage: 0,
            images: [
                'https://th.bing.com/th/id/OIP.OQVmB-_gXL81xzHUgrj93QHaLH?pid=ImgDet&rs=1',
                'https://th.bing.com/th/id/OIP.mIk3lCwXuEBXUCDiDQvNGgHaFC?pid=ImgDet&rs=1',
                'https://th.bing.com/th/id/R.35337b8448c057f7803dc03ca663e570?rik=4J4EDPZ6dPiZWw&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/OIP.3BkRtXafISYAQPvcdSX_wAHaEj?pid=ImgDet&rs=1',
                'https://th.bing.com/th/id/OIP.vXAmI9F-n3Y-t9B7sw-QgAHaHa?pid=ImgDet&rs=1',
                'https://th.bing.com/th/id/R.9011e3c288292e492614aac279c1f4f9?rik=KWwcY6Wb2J08NQ&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/OIP.ullWwxYt2ld8tkipwvA91wHaJ4?pid=ImgDet&w=1200&h=1600&rs=1',
                'https://th.bing.com/th/id/R.76e6450d27aa45d83997af71fa4f4afc?rik=1tP9yXBH8pf%2bNQ&pid=ImgRaw&r=0'
            ]
        }
    },
    methods: {
        nextImage() {
        this.currentImage = (this.currentImage + 1) % this.images.length;
        },
        prevImage() {
        this.currentImage = (this.currentImage + this.images.length - 1) % this.images.length;
        }
    }
    }
  </script>
  
  <style>
    *{
      margin: 0;
    }
    .Slider{
        margin: auto;
    }
    .switch{
        text-decoration: none;
        color: white;
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
    .text-landing button{
      border-radius: 10px;
      padding: 20px;
      color: white;
      background-color: blue;
      filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.25)); 
      cursor: pointer;
    }
    .text-landing button:hover{
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
    .feature-box-landing{
      box-shadow: 0 0 30px ;
      align-content: center;
      background-color: rgb(124, 201, 9);
      width: 100%;
      height: 400px;
      display: flex;
      border-radius: 10px;
    }
    .text-landing{
      width: 50%;
      padding: 40px;
    }
    .picture-landing{
      width: 50%;
    }
    .picture-landing img{
      margin: 20px;
      width: 90%;
      height: 90%;
    }
    .text-landing h1{
      -webkit-text-stroke: 2px black;
      color: white;
      font-family: Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif;
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