<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top">
      <span class="navbar-brand mx-4">
        <router-link to="/" class="brand-name border-0">Tesla</router-link>
      </span>

      <ul class="navbar-nav mx-auto navbar-links">
        <li class="nav-item"><router-link to="/model3" class="nav-link">Model 3</router-link></li>
        <li class="nav-item"><router-link to="/models" class="nav-link">Model S</router-link></li>
        <li class="nav-item"><router-link to="/modelx" class="nav-link">Model X</router-link></li>
        <li class="nav-item"><router-link to="/modely" class="nav-link">Model Y</router-link></li>
      </ul>

      <ul class="navbar-nav me-auto navbar-links">
        <li class="nav-item"><span class="nav-link">Shop</span></li>
        <li class="nav-item"><span class="nav-link">Account</span></li>
      </ul>

      <button class="navbar-toggler">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </header>
  <router-view/>
</template>

<script>
import "@/assets/css/global.css"
export default {
 
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

 /* nav {
  padding: 30px;
} */

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

@media (max-width: 780px) {
  .navbar-links{
    display: none;
  }
}
</style>
