<template>
  <div id="footer">
    <ul>
        <li v-for='(item,index) in list' :key='index'>
           <router-link :to='item.path'>
              <i class="iconfont" :class="item.icon"></i>
              <p>{{item.name}}</p>
          </router-link>
        </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        list:[ 
          {
            icon:"icon-shouye",
            name:"凡客",
            path:"/"
          },
          {
            icon:"icon-category",
            name:"分类",
            path:"/class"
          },
          {
            icon:"icon-icon",
            name:"定制",
            path:"/custom"
          },
          {
            icon:"icon-icon1",
            name:"购物车",
            path:"/cart"
          },
          {
            icon:"icon-wode",
            name:"我的",
            path:"/user"
          },
        ]
      }
    }

  }
</script>
<style scoped>
#footer {
  position:fixed; 
  bottom:0; left:0; 
  width:100%;
  height:51px;
  border-top:1px solid #ccc;
  text-align:center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background:#fff;
}
#footer ul{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
#footer ul li{
  width:20%;
  font-size: 16px;
  /* flex-direction: row; */
}
#footer ul li .iconfont{
  font-size: 24px;
  color:#ccc;
}
#footer ul li p{
  font-size: 12px;
  color:#ccc;
}

</style>