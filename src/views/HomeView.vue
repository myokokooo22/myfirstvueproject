<template>
  <div class="container-fluid">
    <Model3></Model3>
    <ModelX></ModelX>
    <ModelS></ModelS>
    <ModelY></ModelY>
  </div>
</template>

<script>


import Model3 from './Model3.vue';
import ModelX from './ModelX.vue';
import ModelS from './ModelS.vue';
import ModelY from './ModelY.vue';

export default {
  name: 'HomeView',
  components: {
    Model3, ModelX, ModelS, ModelY
  }
}
</script>

<style>
.container-fluid{
  padding: 0px;
  margin: 0;
}
</style>
