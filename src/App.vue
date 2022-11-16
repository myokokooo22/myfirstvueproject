<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top">
      <span class="navbar-brand mx-4">
        <router-link to="/" class="brand-name border-0">Tesla</router-link>
      </span>

      <ul class="navbar-nav ms-auto navbar-links">
        <li class="nav-item"><router-link to="/model3" class="nav-link fw-bold">Model 3</router-link></li>
        <li class="nav-item"><router-link to="/models" class="nav-link fw-bold">Model S</router-link></li>
        <li class="nav-item"><router-link to="/modelx" class="nav-link fw-bold">Model X</router-link></li>
        <li class="nav-item"><router-link to="/modely" class="nav-link fw-bold">Model Y</router-link></li>
      </ul>

      <ul class="navbar-nav mx-auto navbar-links">
        <li class="nav-item"><span class="nav-link fw-bold">Shop</span></li>
        <li class="nav-item"><span class="nav-link fw-bold">Account</span></li>
      </ul>

      <button class="navbar-toggler">
        <span class="navbar-toggler-icon" @click.prevent="showHide()"></span>
      </button>

    </nav>

    <div class="offcanvas offcanvas-end" :class="showMenu ? 'show' : ''" tabindex="-1" :style="{ visibility: showMenu ? 'visible' : 'hidden' }">
      <div class="offanvas-header my-3 mx-3">
        <button type="button" class="btn-close" @click.prevent="showHide()"></button>
      </div>
      <div class="offcanvas-body d-lg-none d-sm-block">
       <ul class="navbar-nav">
          <li class="nav-item mx-auto"><router-link to="/" class="nav-link">Home</router-link></li>
          <li class="nav-item mx-auto"><router-link to="/model3" class="nav-link">Model 3</router-link></li>
          <li class="nav-item mx-auto"><router-link to="/models" class="nav-link">Model S</router-link></li>
          <li class="nav-item mx-auto"><router-link to="/modelx" class="nav-link">Model X</router-link></li>
          <li class="nav-item mx-auto"><router-link to="/modely" class="nav-link">Model Y</router-link></li>
       </ul>
      </div>
    </div>

  </header>
  <router-view/>
</template>

<script>
import "@/assets/css/global.css"
import { ref } from '@vue/reactivity';
export default {
   
    
    setup(){
      let showMenu= ref(false);

      let showHide = () =>{
        showMenu.value ? showMenu.value = false : showMenu.value = true;
      }

      return{showMenu, showHide}
    }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a.router-link {
  font-weight: bold;
  color: #000;
}

nav a.router-link-exact-active {
 border-bottom: 2px solid crimson;
} 

.brand-name{
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
}

.brand-name:hover{
  color: white;
}

.navbar-slide{
    display: none;
}

.btn-close{
    display: none;
 }

 .offcanvas{
  width: 300px;
 }

@media (max-width: 992px) {
  .navbar-links{
    display: none;
  }

  .btn-close{
    display: block;
  }
}

@media (max-width: 1200px) {
  .navbar-slide{
    display: none;
  }

 
}
</style>
