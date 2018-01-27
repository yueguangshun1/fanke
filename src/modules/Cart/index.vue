<template>
  <div class="fk-custom">
    
    <fk-content class='fk-cart'>
      <fk-header></fk-header>
      购物车</fk-content>
    <fk-footer></fk-footer>
  </div>
</template>
<script>
  export default {
   
  }
</script>
<style scoped lang="scss">
.fk-custom{
  height: auto;
  .header{
    position: relative;
  }
}
.fk-cart {

  max-width: 750px;
  margin: 0 auto;
}
</style>