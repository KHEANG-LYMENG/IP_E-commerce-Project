<!-- <template>
  <div class="container">
    <h1>Shoping Cart</h1>
    <div v-for="product in cartItems" :key="product.id" class="container flex">
      <img :src="product.image" alt="">
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
      <button class="remove-button">Remove</button>
    </div>
    <h3 id="total-price">Total: ${{ totalPrice }}</h3>
    <button type="button" id="checkout-button">Proceed to Checkout</button>
  </div>
</template> -->
<template>
  <div style="padding-top: 30px;"></div>
<section class="h-100 h-custom" style="background-color: rgb(197, 195, 195);">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 class="mb-0 text-muted">{{ totalItem }} items</h6>
                  </div>
                  <hr class="my-4">

                  <div v-for="product in cartItems" :key="product.id" class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                      :src="`http://localhost:3000${product.image}`" style="width: 100px; height: 100px;"
                        class="img-fluid rounded-3" alt="Cotton T-shirt">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-muted">{{ product.title }}</h6>
                      <h6 class="text-black mb-0">{{ product.description }}</h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="1" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" />

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">$ {{ product.price }}</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <button 
                      class="btn btn-danger"
                      v-on:click="removeFromCart(product.id)"
                      >
                      <i class="fas fa-times"></i>
                    </button>
                    </div>
                  </div>

                  <hr class="my-4">

                 

                  <div class="pt-5">
                    <h6 class="mb-0"><router-link to="/home"><a href="#!" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></router-link></h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-grey" style="border-radius: 15px;">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">items ({{ totalItem }})</h5>
                    <h5>${{ totalPrice }}</h5>
                  </div>


                  <h5 class="text-uppercase mb-3">Give code</h5>

                  <div class="mb-5">
                    <div class="form-outline">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplea2">Enter your code</label>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total price</h5>
                    <h5>${{ totalPrice }}</h5>
                  </div>
                  <router-link to="/cart/checkout">
                  <button type="button" class="btn btn-primary btn-block btn-lg"
                    data-mdb-ripple-color="dark">Checkout</button>
                  </router-link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>



<script>
import axios from 'axios';
// import { cartItems } from '../init-data';

export default {
  name: 'cartPage',
  data() {
    return {
      cartItems: [],
      
    }
  },
  
  async created() {
    const result = await axios.get('http://localhost:3000/api/users/12345/cart');
    const cartItems = result.data;
    this.cartItems = cartItems;
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0,
      );
    },
    
    totalItem() {
      return this.cartItems.reduce(
        (count, _) => count + 1,0,
      );
    },
    
  },
  methods: {
    async removeFromCart(productId){
      if (confirm('Are you sure you want to remove this item from your cart?')) {
        const result = await axios.delete(`http://localhost:3000/api/users/12345/cart/${productId}`);
        this.cartItems = result.data;
      }
    }
  },
}
</script>
<style scoped>
 

.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
}

.card-registration .select-arrow {
top: 13px;
}

.bg-grey {
background-color: #eae8e8;
}

</style>