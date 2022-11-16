<template>
    <div class="container-fluid">
      <div class="banner-imgs">
        <p>{{brandName}}</p>
        <button type="button" class="ordernow">Order Now</button>
      </div>
      
   </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup(){
    let brandName = ref("Model S")

    return {brandName}
  }
}
</script>

<style scoped>
.banner-imgs{
  background: url(../assets/imgs/models.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
</style>