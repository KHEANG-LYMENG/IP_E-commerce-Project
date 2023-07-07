<template>
    <!-- <div class="container"> -->
        <div class="hero">
            <h1>{{ title }}</h1>
        </div>
    <!-- </div> -->
</template>

<script>
    export default{
        props: {
            title: String
        }
    }
</script>

<style scoped>
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