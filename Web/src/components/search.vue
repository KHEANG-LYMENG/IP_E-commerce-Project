<template>
   
        <form class="d-flex me-auto">
        <div class="input-group">
          <input
            v-model="search"
            @input="$emit('search', search)"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button class="btn input-group-text" type="submit"><i class="fas fa-search text-black"></i></button>
        </div>
      </form>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style>
form{
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 5px gainsboro;
    background-color: gainsboro;
}
</style>