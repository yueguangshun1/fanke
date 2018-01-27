<template>
  <div class="content">
     <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'fk-content',
  }
</script>
<style scoped>
/* .header~.content { padding-top:51px;}  */
/* .footer~.content {padding-bottom:51px;} */
/* .content{margin-bottom:0.51rem} */
/* .content{margin-top:0.45rem} */
.content{margin-bottom:0.44rem; width:100%; overflow-y: auto;}

</style>