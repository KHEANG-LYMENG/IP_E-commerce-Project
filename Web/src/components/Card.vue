<template>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div v-for="item in items" :key="item.id">
          <div class="card">
            <div class="card-img-zoom">
              <img :src="item.image" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">{{ item.title }}</h5>
              <div class="price">
                <div>Price: </div>
                <div>${{ item.price }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const items = [
    {
      id: 1,
      title: 'Shoes',
      price: '10.00',
      description: 'This is the description of card 1',
      image: 'https://th.bing.com/th/id/OIP.UcUSTZmPgjBdtVp6ArUQ8gHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 2,
      title: 'Shirt',
      price: '10.00',
      description: 'This is the description of card 2',
      image: 'https://th.bing.com/th/id/OIP.e0Ho01svGIN36yWS5B-9igHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 3,
      title: 'Jean',
      price: '10.00',
      description: 'This is the description of card 3',
      image: 'https://th.bing.com/th/id/OIP.OQVmB-_gXL81xzHUgrj93QHaLH?pid=ImgDet&rs=1',
    },
    {
      id: 4,
      title: 'Cap',
      price: '10.00',
      description: 'This is the description of card 4',
      image: 'https://th.bing.com/th/id/OIP.VltMmW2_8TiG9VjmJsQVcAHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 5,
      title: 'Shoes',
      price: '10.00',
      description: 'This is the description of card 1',
      image: 'https://th.bing.com/th/id/OIP.UcUSTZmPgjBdtVp6ArUQ8gHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 6,
      title: 'Shirt',
      price: '10.00',
      description: 'This is the description of card 2',
      image: 'https://th.bing.com/th/id/OIP.e0Ho01svGIN36yWS5B-9igHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 7,
      title: 'Jean',
      price: '10.00',
      description: 'This is the description of card 3',
      image: 'https://th.bing.com/th/id/OIP.OQVmB-_gXL81xzHUgrj93QHaLH?pid=ImgDet&rs=1',
    },
    {
      id: 8,
      title: 'Cap',
      price: '10.00',
      description: 'This is the description of card 4',
      image: 'https://th.bing.com/th/id/OIP.VltMmW2_8TiG9VjmJsQVcAHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 9,
      title: 'Shoes',
      price: '10.00',
      description: 'This is the description of card 1',
      image: 'https://th.bing.com/th/id/OIP.UcUSTZmPgjBdtVp6ArUQ8gHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 10,
      title: 'Shirt',
      price: '10.00',
      description: 'This is the description of card 2',
      image: 'https://th.bing.com/th/id/OIP.e0Ho01svGIN36yWS5B-9igHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 11,
      title: 'Jean',
      price: '10.00',
      description: 'This is the description of card 3',
      image: 'https://th.bing.com/th/id/OIP.OQVmB-_gXL81xzHUgrj93QHaLH?pid=ImgDet&rs=1',
    },
    {
      id: 12,
      title: 'Cap',
      price: '10.00',
      description: 'This is the description of card 4',
      image: 'https://th.bing.com/th/id/OIP.VltMmW2_8TiG9VjmJsQVcAHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 13,
      title: 'Shoes',
      price: '10.00',
      description: 'This is the description of card 1',
      image: 'https://th.bing.com/th/id/OIP.UcUSTZmPgjBdtVp6ArUQ8gHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 14,
      title: 'Shirt',
      price: '10.00',
      description: 'This is the description of card 2',
      image: 'https://th.bing.com/th/id/OIP.e0Ho01svGIN36yWS5B-9igHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 15,
      title: 'Jean',
      price: '10.00',
      description: 'This is the description of card 3',
      image: 'https://th.bing.com/th/id/OIP.OQVmB-_gXL81xzHUgrj93QHaLH?pid=ImgDet&rs=1',
    },
    {
      id: 16,
      title: 'Cap',
      price: '10.00',
      description: 'This is the description of card 4',
      image: 'https://th.bing.com/th/id/OIP.VltMmW2_8TiG9VjmJsQVcAHaHa?pid=ImgDet&rs=1',
    },
    
  ];
  </script>
  
  <style scoped>
  .container {
    margin-top: 30px;
  }
  .card {
    height: 300px;

    border: 3px solid rgb(255, 255, 255);
    box-shadow: 0 0 10px;
  }
  .card:hover {
    cursor: pointer;
  }
  
  .card-img-top {
    height: 100%;
  }
  
  .card-img-zoom {
    overflow: hidden;
    transition: transform 0.5s ease;
  }
  
  .card-img-zoom:hover img {
    transform: scale(1.1);
  }
  .price{
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  </style>