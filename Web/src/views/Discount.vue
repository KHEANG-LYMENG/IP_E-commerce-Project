<template>
  <div style="padding-top: 30px;"></div>
  <div class="container">

    <Search @search="search = $event" />
  </div>
  <div style="padding-top: 30px;"></div>
  <div class="container">
    <SignText title="DISCOUNT"></SignText>
    <Card :search="search"></Card>
  </div>
</template>

<script>
import Search from '../components/search.vue'
  import Card from '../components/CardDiscount.vue'
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
<style>
</style>