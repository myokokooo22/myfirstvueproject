<template>
  <div class="container-fluid">
    <ModelS></ModelS>
    <Model3></Model3>
    <ModelX></ModelX>
    <ModelY></ModelY>
  </div>
</template>

<script>

import ModelS from './ModelS.vue';
import Model3 from './Model3.vue';
import ModelX from './ModelX.vue';
import ModelY from './ModelY.vue';

export default {
  name: 'HomeView',
  components: {
    ModelS, Model3, ModelX, ModelY
  }
}
</script>

<style>
.container-fluid{
  padding: 0px;
  margin: 0;
}
</style>
