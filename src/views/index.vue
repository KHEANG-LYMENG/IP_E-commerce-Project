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