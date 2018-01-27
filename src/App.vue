<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
html{
  font-size: 100px;
}
html,body{
  width:100%;
  height:100%;
}
body{
  font-size:16px;
}
ul,ol{
  list-style: none;
}
a{
  text-decoration:none;
}
img,iframe{
  border:none;
}
textarea{resize:none;}
input{outline:none;}
.clear{width:0;height:0;overflow: hidden; clear:both;}
#app{
  width:100%;
  height:100%;
}
</style>

