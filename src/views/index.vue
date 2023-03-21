<template>
    <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <button @click="$emit('checkout')"></button>
      </nav>
    </div>
    <RouterView />
  </header>
</template>

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
</style>