<template>
   <div class="container-fluid">
      <div class="banner-imgs">
        <p>{{brandName}}</p>
      </div>
      
   </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
   setup(){
    let brandName = ref("Model X");

    return {brandName}
   }
}
</script>

<style scoped>
.banner-imgs{
  background: url(../assets/imgs/modelx.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
</style>