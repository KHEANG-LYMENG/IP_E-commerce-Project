<template>
    <div style="padding-top: 30px;"></div>
    <div class="container">
  <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">Summarize items ({{ totalItem }})</span>
        <span class="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul class="list-group mb-3">
        <li v-for="product in cartItems" :key="product.id" class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">{{ product.title }}</h6>
            <small class="text-muted">{{ product.description }}</small>
          </div>
          <span class="text-muted">${{ product.price }}</span>
        </li>
        
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>${{ totalPrice }}</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code">
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>

    <div class="col-md-8 order-md-1">
      
      <form class="needs-validation" novalidate>
        <h4 class="text-muted">Order 001</h4>
      <h2 class="mb-3">Thank you, John!</h2>
      <hr>

      <p>Your order is confirmed</p>
      <p>We've accepted your order and we're getting it ready</p>
      <hr>
      <h2>Customer Information</h2>
        <div class="d-block my-3">
            <div class="d-flex justify-content-between">
                <div>
                    <h3>Shipping Address</h3>
                    <div>John Sok</div>
                    <a href="#">#01, 271, Phnom Penh, Cambodia</a>
                </div>
                <div>
                    <h3>Billing address</h3>
                    <div>John Sok</div>
                    <a href="#">#01, 271, Phnom Penh, Cambodia</a>
                </div>
            </div>

            <div style="padding-top: 20px;"></div>

            <div class="d-flex justify-content-between">
                <div>
                    <h3>Shipping Method</h3>
                    <div>UPS Ground</div>
                    <p>( Estimated ship time of 7 days)</p>
                </div>
                <div>
                    <h3>Payment Method</h3>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"/></svg>
                        
                        <span>xxxxxxxxxxxxxxxxx168 - ${{ totalPrice }}&nbsp;&nbsp;</span></div>
                    <a href="#"></a>
                </div>
                
            </div>
        </div>

      
        <hr>

        <div class="d-flex justify-content-center pt-5">
           
            <router-link to="/home">
                <button class="btn btn-primary btn-lg" type="submit">Back Shoping</button>
            </router-link>
        </div>

      </form>
      
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios';
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
    }
  }
}
</script>