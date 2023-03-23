<template>
  <body>
    
    <div class="padding-top"></div>
    <div class="wrapper">
      <div class="feature-box">
        <div class="picture">
          <img src="https://images.squarespace-cdn.com/content/v1/5811b29bb8a79b740e329a5c/1625044021495-1TGDZCHZ50V281IX5AXR/front-and-back-t-shirt-mockup-template.png" alt="">
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
            <img src="../assets/images/download.png" alt="">
          </div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <dir>Price: </dir>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="https://th.bing.com/th/id/R.d830d3bbbef32ca954c748f82fdbee4e?rik=xjZkNHOPQNp0hQ&riu=http%3a%2f%2finikweb.com%2fwp-content%2fuploads%2f2015%2f02%2fcap-1_black.jpg&ehk=ibrUReUcwV03IQOsPiV3kbUU6FtRUTDvnK4dht1oPko%3d&risl=&pid=ImgRaw&r=0" alt="">
          </div>
          <h2 class="shirt-name">Cap</h2><br>
          <div class="shirt-price">
            <dir>Price: </dir>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="https://th.bing.com/th/id/OIP.VUCv-Fzp9fihW023u_zSDAHaLH?pid=ImgDet&rs=1" alt="">
          </div>
          <h2 class="shirt-name">Jean</h2><br>
          <div class="shirt-price">
            <dir>Price: </dir>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="https://th.bing.com/th/id/R.6047f44fde5bc04e4232926d584f711c?rik=Cpahw2YUmb7DJg&pid=ImgRaw&r=0" alt="">
          </div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <dir>Price: </dir>
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
            <img src="../assets/images/download.png" alt="">
          </div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <dir>Price: </dir>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="https://th.bing.com/th/id/R.d830d3bbbef32ca954c748f82fdbee4e?rik=xjZkNHOPQNp0hQ&riu=http%3a%2f%2finikweb.com%2fwp-content%2fuploads%2f2015%2f02%2fcap-1_black.jpg&ehk=ibrUReUcwV03IQOsPiV3kbUU6FtRUTDvnK4dht1oPko%3d&risl=&pid=ImgRaw&r=0" alt="">
          </div>
          <h2 class="shirt-name">Cap</h2><br>
          <div class="shirt-price">
            <dir>Price: </dir>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="https://th.bing.com/th/id/OIP.VUCv-Fzp9fihW023u_zSDAHaLH?pid=ImgDet&rs=1" alt="">
          </div>
          <h2 class="shirt-name">Jean</h2><br>
          <div class="shirt-price">
            <dir>Price: </dir>
            <div>$10:00</div>
          </div>
        </div>
        <div class="padding-left"></div>
        <div class="box">
          <div class="padding-box"></div>
          <div class="shirt">
            <img src="https://th.bing.com/th/id/R.6047f44fde5bc04e4232926d584f711c?rik=Cpahw2YUmb7DJg&pid=ImgRaw&r=0" alt="">
          </div>
          <h2 class="shirt-name">Shirt</h2><br>
          <div class="shirt-price">
            <dir>Price: </dir>
            <div>$10:00</div>
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
  box-shadow: 0 0 10px;
  background-color: whitesmoke;
  width: 25%;
  height: 300px;
  border-radius: 10px;
}
.box:hover{
  background-color: grey;
  cursor: pointer;
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