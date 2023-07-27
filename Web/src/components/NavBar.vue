<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand ms-5" href="#">
          <router-link to="/"><img style="width: 80px; height: 80px; border-radius: 50%;" src="../assets/images/logo.png" alt=""></router-link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
                <a><router-link to="/home" class="nav-link" >Home</router-link></a>
            </li>
            <li class="nav-item">
                <a><router-link to="/new" class="nav-link">New</router-link></a>
            </li>
            <li class="nav-item">
                <a><router-link to="/bestsell" class="nav-link">Best Sell</router-link></a>
            </li>
            <li class="nav-item">
                <a><router-link to="/discount" class="nav-link">Discount</router-link></a>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <!-- <form class="d-flex me-auto">
            <div class="input-group">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn input-group-text" type="submit"><i class="fas fa-search text-white"></i></button>
            </div>
          </form> -->
          <li class="nav-item">
            <a>
                <router-link to="/cart" class="nav-link">
                    Cart
                    <i class="fas fa-shopping-cart"></i> 
                    <span class="badge text-white">({{ totalItem }})</span>
                </router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div></div>
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
    
    totalItem() {
      return this.cartItems.reduce(
        (count, _) => count + 1,0,
      );
    }
  }
}
</script>

<style scoped>
    nav {
        padding: 20px;
        color: rgb(30, 30, 109);
        background-color: grey;
        width: 100%;
        font-size: 20px;
        text-align: start;
        
    }

    nav a.router-link-exact-active {
        color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }

</style>