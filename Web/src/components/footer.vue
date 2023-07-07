<template>
    <footer class="footer navbar-dark bg-secondary">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <img src="../assets/images/logo.png" alt="Logo" class="footer-logo" style="border-radius: 50px;">
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit mi at turpis lobortis, ut ultricies ex pretium.</p>
          </div>
          <div class="col-12 col-md-6">
            <ul class="list-inline text-md-end">
              <li class="list-inline-item"><a href="#">Home</a></li>
              <li class="list-inline-item"><a href="#">About</a></li>
              <li class="list-inline-item"><a href="#">Contact</a></li>
            </ul>
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