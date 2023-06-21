<template>
    <div class="product-row" v-for="row in productRows" :key="row[0].name">
      <div v-for="product in row" :key="product.name" class="product-box">
        <img :src="product.pictureUrl" alt="Product image" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.detail }}</p>
        <div class="padding-top"></div>
        <div class="shirt-price">
            <div>Price:</div>
            <div>{{ product.price }}</div>
        </div>
        <button class="product-btn">+</button>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, computed, ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const products = ref([]);
  
      onMounted(async () => {
        try {
          const response = await axios.get('http://localhost:3000/');
          products.value = response.data;
        } catch (err) {
          console.error(err);
        }
      });
  
      const productRows = computed(() => {
        const rows = [];
        for (let i = 0; i < products.value.length; i += 4) {
          rows.push(products.value.slice(i, i + 4));
        }
        return rows;
      });
  
      return { productRows };
    }
  };
  </script>

  <style>
    .padding-top{
        padding-top: 30px;
    }
    .product-box {
  background-color: whitesmoke;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  flex: 1;
  text-align: center;
}
.product-box:hover{
  background-color: skyblue;
  cursor: pointer;
}
.shirt-price{
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.product-image {
  background-color: antiquewhite;
  margin: auto;
  width: 80%;
  height: 60%;
}
.product-btn{
  border-radius: 50%;
  padding: 10px;
  background-color: blue;
  color: white;
}
.product-btn:hover{
  background-color: red;
  cursor: pointer;
}
    @media (min-width: 1024px) {
        .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
        }
    }
  </style>