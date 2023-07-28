<template>
    <footer class="footer navbar-dark bg-secondary">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <img src="../assets/images/logo.png" alt="Logo" class="footer-logo" style="border-radius: 50px;">
            <h5>Email: LMK@gmail.com</h5>
            <h5>Contact: +855 12 345 678</h5>
          </div>
          <div class="col-12 col-md-6">
            <p>Stay in touch! Join our Newsletter</p>
            <input type="text"><span><button class="btn btn-dark">Sign up</button></span>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    margin-top: 30px;
    padding: 30px 0;
  }
  
  .footer-logo {
    height: 50px;
    margin-bottom: 20px;
  }
  
  .footer p {
    margin-bottom: 20px;
  }
  
  .footer ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .footer li {
    display: inline-block;
    margin-right: 10px;
  }
  
  .footer li:last-child {
    margin-right: 0;
  }
  </style>