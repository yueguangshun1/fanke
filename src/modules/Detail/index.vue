<template>
  <div class="fk-list">
    <fk-content class="fk-content">
      <fk-header tit="详情页"></fk-header>
      <div class="swipe-wrapper">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="ele in img">
            <img class="pic" :src="ele" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="prd-tit" v-for="ele in banner">
      	
      	
      	
      	
      	
      	
      	
      	
      	
            <span>{{ele.p_name}}</span>
            <span class="span1">{{ele.price}}元</span>
            <p>充100返100，点击充值</p>
            <p>充值购买更优惠</p>
      </div>
      <!-- 下面的线 -->
      <div class="bb mhr">

      </div>
      <div class="prd-size" id="prd-size" @click="fn()"> 
        <span class="chkbox"></span><span class="size-info" id="size-info">已选:浅花灰,M码</span>
        <span class="sword-r">></span> 
      </div>
      <div class="size-box" v-for ="ele in banner" v-if="willShow">
          <h3 class="tit">选择颜色</h3>
          <!-- 服装颜色 -->
          <p class="color"><span>{{ele.color}}</span></p>  
          <h3 class="tit">尺码选择</h3>
          <!-- 尺码选择 -->
          <p class="color"><span>{{ele.size}}</span></p>  
          <h3 class="tit">购买数量</h3>
          <!-- 数量的加减 -->
          <p class="changecount"> 
            <span class="minus"></span>
            <span id="num" class="num">1</span>
            <span onclick="changeNum(2)" class="plus"></span> 
          </p>
      </div>
      <div class="bb mhr">

      </div>
       <div class="mt"> 
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">商品详情</mt-tab-item>
          <mt-tab-item id="2">评论</mt-tab-item>
          <mt-tab-item id="3">咨询</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1" >
            <div v-for="ele in xiang"  class="qqqq">
              <img class="pic" :src="ele" alt="">
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            cd
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
          d
          </mt-tab-container-item>
        </mt-tab-container>
       </div> 
      
    </fk-content>
    <footer>
      <div class="left">
        <a href="">
          <i class="iconfont &#xe732;" id="icon1"></i>
        </a>
      </div>
      <div class="right">
        <p>加入购物车</p>
      </div>
    </footer>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    props: {
      tit: {
        type: String, 
        default: ''
      }
    },
    data(){
      return{
          banner:[],
          img:[],
          xiang:[],
          selected:"1",
          willShow:true
      }
    },
    mounted(){
      const id = this.$route.params.pid
        axios.get("http://10.9.171.4:3000/cate/getDatil?pid="+id).then(res=>{ 
          this.banner = eval(res.data)
          // console.log(res.data)
          this.img = eval(res.data[0].img_list)
          // console.log(res.data[0].img_list)
          this.xiang= eval(res.data[0].delimg)
          console.log(eval(res.data[0].delimg))
      })
    },
    methods:{
      fn:function(){
       this.willShow=!this.willShow
      }
    }

}
</script>


<style scoped lang="scss">
.fk-list{
  width:100%;
  height:100%;
  // overflow: hidden;
  .fk-content{
    width:100%;
    height:100%;
    .header{
      position: relative;
    }
    .swipe-wrapper{
    width:100%;
    height:3.09rem;
      img{
        width:2.98rem;
        height:2.98rem;
        margin:0.1rem 0.4rem ;
      }
    }
    .prd-tit{
      padding: .5em 2em;
      line-height: 1.6em;
      span{
        font-size: 0.12rem;
      }
      .span1{
        color:red;
        font-size: 0.16rem;
        margin-left:0.1rem; 
      }
      p{
        color: red;
        font-size: 0.12rem;
      }
    }
    .bb {
      display: block;
      border-bottom: 1px solid #ccc;
      height: 1px;
    }
    .mhr {
     margin: 0 2em;
    }
    .prd-size {
      background: #f5f5f5;
      padding: .5em 2em;
      margin: .9em 2em;
      .sword-r {
        float: right;
        width: .7em;
        height: 1.35em;
      }
    }
    .size-box{
      padding:0 .02rem;
      height:2.47rem;
      padding:0 2em;
      .tit{
        font-size: 0.14rem;
      }
      .color{
        padding-top: 1em;
        padding-bottom: 1.5em;
        border-bottom: 1px solid #ccc;
        margin-bottom: .9em;
          span{
            // float: left;
            border: .1em solid #b3b3b3;
            border-radius: .1em;
            margin-right: .5em;
            margin-bottom: .5em;
            padding: .5em .8em;
            line-height: 0.2rem;
        }
      }
      .size-box .changecount {
        padding-top: 1em;
        padding-bottom: .7em;
       
      }
     
    }


    .qqqq{
      // width: 100%;
      height: auto;
      .pic{
        width:100%;
        height:auto;
      } 
    }
  }

}
footer{
  width:100%;
  position: fixed;
  bottom:0;
  left:0;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-top:1px solid #cccccc;
  .left{
    width:50%;
    height:0.36rem;
    line-height:0.36rem;
    background:#ffff;
  }
  .right{
    width:50%;
    height:0.36rem;
    background: red;
    line-height:0.36rem; 
    color:#fff;
  }
}

</style>