<template>
  <section>
    <div class="container-fluid">
      <div class="banner-imgs">
        <p>{{brandName}}</p>
        <button type="button" class="ordernow">Order Now</button>
      </div>
      
   </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
setup(){
  let brandName = ref("Model 3");

  return{brandName}
}
}
</script>

<style scoped>
section{
  height: 100vh;
}

.banner-imgs{
  background: url(../assets/imgs/model3.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  position: relative;
}

</style>