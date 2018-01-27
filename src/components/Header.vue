<template>
  <div class="header">
    <a href="javascript:history.back(-1)"> 
      <i class="iconfont icon-fanhui" id="icon1"></i>
    </a>
    <p>{{tit}}</p>
    <span></span>
  </div>
</template>
<script>
  export default {
    name: 'lh-header',
     props: {
      tit: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style scoped>
.header { 
  position: relative;; 
  top:0; left:0; 
  width:100%;
  height:44px;
  line-height:44px; 
  border-bottom:1px solid #ccc; 
  /* text-align:center; */
  background:#b81c22;
  display: flex;
  justify-content: space-between;
 
 }
.header .iconfont{
  font-size: 0.34rem;
  color: #ffffff;
   /* padding:0 0.1rem; */
   margin-left:0.1rem;
}
p{
  font-size: 0.18rem;
  color:#ffff;
}

</style>