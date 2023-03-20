<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
          <img class="logo" src="./assets/images/logo.svg" alt="">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/product">Product</RouterLink>
          <RouterLink to="/checkout">checkout</RouterLink>
      </nav>
    <RouterView />
    </div>
  </header>
  <footer>
    
  </footer>
</template>

<style scoped>
*{
  margin: 0;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  padding-left: 30px;
  padding-right: 100px;
  width: 25px; 
  height: 25px; 
  border-radius: 10px;
}

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

nav a {
  color: aliceblue;
  text-decoration: none;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
