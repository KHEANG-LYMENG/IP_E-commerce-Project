<template>
  <div style="padding-top: 30px;"></div>
  <div class="container">

    <Search @search="search = $event" />
  </div>
  <div style="padding-top: 30px;"></div>
  <div class="container">
    <div class="feature-box">
      <div class="picture">
        <img src="https://th.bing.com/th/id/R.24b0625137dfcadc7e7733c0e6c523ca?rik=XiwqmNtQer8Wjg&pid=ImgRaw&r=0" alt="">
      </div>
      <div class="text">
        <h2>New T-Shirt</h2>
        <p>best nylon quality selected</p><br><br>
        <h2>Price : <span style="color: red;">$10:00</span></h2><br><br><br>
        <button style="background-color: gray;">Add to cart</button>
      </div>
    </div>
    <div style="padding-top: 30px;"></div>
    <SignText title="Famous"></SignText>
  </div>

    <div class="container">
      <Card :search="search" ></Card>
    </div>
</template>

<script>
import Search from '../components/search.vue'
  import Card from '../components/Card.vue'
  import SignText from '../components/SignText.vue'
  export default {
  components: {
    SignText,
    Card,
    Search
  },
  data() {
    return {
      search: '',
    };
  },
};
</script>
<style scroped>

/* .wrapper{
    margin: auto;
    width: 90%;
  } */
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
  .text button:hover{
    background-color: blue;
    color: white;
  }
  .picture{
    width: 50%;
  }
  .picture img{
    margin: 20px;
    width: 90%;
    height: 90%;
  }
  
  .padding-top {
    padding-top: 30px;
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
  
</style>
