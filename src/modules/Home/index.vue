<template>

  <div class="fk-hom">
    <div class="fk_header">
      <div class="div1">
        <i class="iconfont icon-sousuo"></i>
        <input type="text">
      </div>
       <i class="iconfont icon-dingdan" id="icon1"></i>
    </div>
   
    <fk-content class="fk_content">
      <div class="swipe-wrapper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="ele in detailData">
          <img :src="ele.banner_img" alt="" class="pic"/>
        </mt-swipe-item>
        
      </mt-swipe>
      </div>
      <!-- 专题 -->
      <div class="order"> 
        <img src="../../img/1.jpg">
        <ul  class="order_ul">
          <li>
            <img src="../../img/2.jpg">
            <span>新品</span>
          </li>
          <li>
            <img src="../../img/3.jpg">
            <span>特惠</span>
          </li>
          <li>
            <img src="../../img/4.jpg">
            <span>频道</span>
          </li>
          <li>
            <img src="../../img/5.jpg">
            <span>专题</span>
          </li>
           <li>
            <img src="../../img/6.jpg">
            <span>定制</span>
          </li>
        </ul>
      </div>

          <!-- 秒杀时间 -->
        <div class="sKill-head clearfix"> 
          <div class="pull-left"> 
            <span class="sk-head-title"> 
              <i class="clock-icon"></i> 
              <span style="vertical-align: middle;">每日秒杀</span>
            </span>
             <span class="sk-session-title gray-color">
                <i class="h-separator"></i>10 点场
              </span>
          </div> 
          <div class="sKill-count pull-right"> 
            <span class="gray-color">距结束</span> 
            <span id="sKill-count-h" class="sKill-count-t vancl-bkg-color sKill-count-h">00</span>:
            <span id="sKill-count-m" class="sKill-count-t vancl-bkg-color sKill-count-m">32</span>:
            <span id="sKill-count-s" class="sKill-count-t vancl-bkg-color sKill-count-s">27</span>
          </div> 
         </div>
          <!-- 秒杀区的商品 -->
         <div class="Sale">
            <ul class="sale_ul">
              <li>
                <a href="javascript:;">
                  <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6375120/mid/6375120-1j201709211422325596.jpg">
                   <p><span>￥798</span> ￥1999</p>
                </a>
              </li>
               <li>
                <a href="javascript:;">
                  <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6375120/mid/6375120-1j201709211422325596.jpg">
                   <p><span>￥798</span> ￥1999</p>
                </a>
              </li>
               <li>
                <a href="javascript:;">
                  <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6375120/mid/6375120-1j201709211422325596.jpg">
                   <p><span>￥798</span> ￥1999</p>
                </a>
              </li>
               <li>
                <a href="javascript:;">
                  <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6375120/mid/6375120-1j201709211422325596.jpg">
                   <p><span>￥798</span> ￥1999</p>
                </a>
              </li>
                <li>
                <a href="javascript:;">
                  <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6375120/mid/6375120-1j201709211422325596.jpg">
                   <p><span>￥798</span> ￥1999</p>
                </a>
              </li>
            </ul>
         </div>
        <div class="yushou">
          <p>预售专场</p>
        </div>
        <div class="tu1">
          <a href="javascript:;">
            <img src="../../img/7.jpg">
          </a>
        </div>
        <div class="tu1-list">
            <ul class="oul">
              <li>
                <a href="javascript:;">
                  <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6379624/mid/6379624-1j201801171012111014.jpg">
                  <p class="p1" style="color:black">POLO衫 色织条领 男款 白色</p>
                  <p style="font-size:0.12rem;color:#ccc">尾款￥149<span style="float:right">定金￥40</span></p>
                  <p style="margin-left:0.05rem;font-size:0.16rem;color:black">充值相当于:<span style="color:red">￥79</span></p>
                  <p style="margin-left:0.1rem;color:#ccc">原价￥159</p>
                </a>
              </li>
                <li>
                <a href="javascript:;">
                  <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6379624/mid/6379624-1j201801171012111014.jpg">
                  <p class="p1" style="color:black">POLO衫 色织条领 男款 白色</p>
                  <p style="font-size:0.12rem;color:#ccc">尾款￥149<span style="float:right">定金￥40</span></p>
                  <p style="margin-left:0.05rem;font-size:0.16rem;color:black">充值相当于:<span style="color:red">￥79</span></p>
                  <p style="margin-left:0.1rem;color:#ccc">原价￥159</p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6379624/mid/6379624-1j201801171012111014.jpg">
                  <p class="p1" style="color:black">POLO衫 色织条领 男款 白色</p>
                  <p style="font-size:0.12rem;color:#ccc">尾款￥149<span style="float:right">定金￥40</span></p>
                  <p style="margin-left:0.05rem;font-size:0.16rem;color:black">充值相当于:<span style="color:red">￥79</span></p>
                  <p style="margin-left:0.1rem;color:#ccc">原价￥159</p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6379624/mid/6379624-1j201801171012111014.jpg">
                  <p class="p1" style="color:black">POLO衫 色织条领 男款 白色</p>
                  <p style="font-size:0.12rem;color:#ccc">尾款￥149<span style="float:right">定金￥40</span></p>
                  <p style="margin-left:0.05rem;font-size:0.16rem;color:black">充值相当于:<span style="color:red">￥79</span></p>
                  <p style="margin-left:0.1rem;color:#ccc">原价￥159</p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6379624/mid/6379624-1j201801171012111014.jpg">
                  <p class="p1" style="color:black">POLO衫 色织条领 男款 白色</p>
                  <p style="font-size:0.12rem;color:#ccc">尾款￥149<span style="float:right">定金￥40</span></p>
                  <p style="margin-left:0.05rem;font-size:0.16rem;color:black">充值相当于:<span style="color:red">￥79</span></p>
                  <p style="margin-left:0.1rem;color:#ccc">原价￥159</p>
                </a>
              </li>
            </ul>
        </div>
        <!-- 开年大促 -->
        <div class="yushou1">
          <p>开年大促</p>
        </div>
        <div class="tu2">
          <a href="javascript:;">
            <img src="http://i6.m.vancl.com/oms/2018_1_19_14_44_57_6661_750x396.jpg">
          </a>
        </div>
        <div class="zhuanchang">
          <ul class="oul">
            <li>
              <a href="javascript:;">
                <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6378866/mid/6378866-1j201711031613586670.jpg">
                <p class="p1" style="color:black">棒球夹克 宇航刺绣 厚棉 C9</p>
                <p style="font-size:0.12rem;color:#ccc">售价：￥298</p>
                <p style="font-size:0.14rem;color:black">充值相当于:<span style="color:red">￥149</span></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6378866/mid/6378866-1j201711031613586670.jpg">
                <p class="p1" style="color:black">棒球夹克 宇航刺绣 厚棉 C9</p>
                <p style="font-size:0.12rem;color:#ccc">售价：￥298</p>
                <p style="font-size:0.14rem;color:black">充值相当于:<span style="color:red">￥149</span></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6378866/mid/6378866-1j201711031613586670.jpg">
                <p class="p1" style="color:black">棒球夹克 宇航刺绣 厚棉 C9</p>
                <p style="font-size:0.12rem;color:#ccc">售价：￥298</p>
                <p style="font-size:0.14rem;color:black">充值相当于:<span style="color:red">￥149</span></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6378866/mid/6378866-1j201711031613586670.jpg">
                <p class="p1" style="color:black">棒球夹克 宇航刺绣 厚棉 C9</p>
                <p style="font-size:0.12rem;color:#ccc">售价：￥298</p>
                <p style="font-size:0.14rem;color:black">充值相当于:<span style="color:red">￥149</span></p>
              </a>
            </li>
          </ul>
        </div>
        <div class="loadmore">
          <p>已没有更多内容了...</p>
        </div>
        <div class="fk-foot1">
          <img src="http://i10.m.vancl.com/content/html5v3/images/see-all.jpg">
          <img src="http://i10.m.vancl.com/content/html5v3/images/ret-top.jpg" @click="toTop">
        </div>
        <!-- 下面的登录 -->
        <div class="fk-foot2">
          <ul>
            <li class="fk-reg">
                <p>注册</p> 
            </li>
            <li class="fk-login">
                <p>登录</p>  
            </li>
          </ul>
        </div>
        <div class="fk-foot3">
          <ul class="clear"> 
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-msnui-telephone" id="icon1"></i>
                <span>帮助</span>
              </a>
            </li> 
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-dingdan" id="icon1"></i>
                <span>客户端</span>
              </a>
            </li> 
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-weixin" id="icon1"></i>
                <span>微信</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-bangzhushouji" id="icon1"></i>
                <span>电脑端</span>
              </a>
            </li>  
          </ul>
        </div>
    </fk-content>

    <fk-footer class="foot"></fk-footer>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        detailData:[]
      }
    },
    mounted(){
      this.axios.get("http://10.9.171.4:3000/getbanner").then(res=>{
        // console.log(res)
        this.detailData=res.data[0].bannerpic
        //  console.log(this.detailData)
      }),
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('.fk_header').offsetTop
        var a= document.getElementsByClassName("fk_header")[0]
          if (scrollTop > offsetTop) {
            this.searchBarFixed = true
            a.style.background="red"
          } else {
            this.searchBarFixed = false
            a.style.background="#cccc"
          }
      },
      toTop(){
        document.documentElement.scrollTop = document.body.scrollTop = 0; 
      }
    },
     destroyed () {
        console.log(222)
        window.removeEventListener('scroll', this.handleScroll)
      }
  }
</script>
<style scoped lang="scss">
.fk_header{
  z-index: 999;
  position:fixed; 
  top:0; left:0; 
  width:100%;
  height:48px;
  border-bottom:1px solid #ccc; 
  text-align:center;
  background:#ccc;
  #icon1{
    line-height: 0.50rem;
  }
}
.div1{
  width:3.2rem;
  height:0.30rem;
  margin-top:0.1rem;
  margin-left:0.15rem; 
  float: left;
  border-radius: 0.2rem;
 background: #ffffff;
}
input{
  width:2.7rem;
  height:0.22rem;
  margin-top:0.03rem;
  border:none;
  margin-left:0.05rem;
}
.iconfont{
  font-size: 0.20rem;
  line-height: 0.30rem;
}
.swipe-wrapper {
  height:2.35rem;
  background:yellowgreen;
  }
.pic { width:100%; height:auto} 

.fk_content{
  overflow-y: scroll;
  width:100%;
  // height:auto;
  // overflow: hidden;
  .order{
    img{
      width:100%;
      height:0.31rem;
    }
    .order_ul{
      height:0.58rem;
      margin-top:0.1rem;
      display: flex;
      justify-content: space-around;
      flex-direction: row; 
      text-align: center;
      li{
        display: flex;
        justify-content: space-around;
        flex-direction: column; 
        align-items: center;
        // margin-top:0.2rem;
        img{
          width:0.33rem;
          height:0.25rem;
          display:inline-block;
        }
        span{
          margin-top:0.1rem;
        }
      }
    }
  }

  .sKill-head{
    height:0.4rem;
    background:#ccc;
    line-height: 0.4rem;
    padding:0 0.1rem 0 0.1rem;  
    .pull-left{
      float: left;
    }
    .pull-right{
      float:right;
    }

  }

  .Sale{
    width:100%;
    // height:1.53rem;
    overflow: hidden;
    .sale_ul{
      width:100%;
      height:100%;
      overflow-x: scroll;
      display: -webkit-box;
    li{
      width:0.96rem;
      margin-left:0.1rem;
      img{
        width: 100%;
        height:1.25rem;
      }
      span{
        font-size: 0.14rem;
        color:red;
      }
      p{
        font-size: 0.14rem;
      }
    }
  }
}

  .yushou{
    height:0.4rem;
    p{
      line-height: 0.4rem;
      margin-left:0.2rem;
    }
  }
  .tu1{
    width:100%;
    height:1.98rem;
    img{
      width:100%;
      height:100%;
    }
  }
  .tu1-list{
    width:100%;
    height:2.81rem;
    background: #cccccc;
    .oul{
      width:100%;
      height:100%;
      overflow-x: auto;
      display: -webkit-box;
      li{
        width:1.31rem;
        height:2.57rem;
        margin-left:0.1rem;
        background:#ffffff;
        img{
          width:100%;
          height:1.69rem;
        }
        .p1{
          font-size: 0.14rem;
          width:1.31rem;
          white-space:nowrap;
          overflow:hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .yushou1{
      height:0.4rem;
    p{
      line-height: 0.4rem;
      margin-left:0.2rem;
    }
  }
  .tu2{
    width:100%;
    height:1.98rem;
    img{
      width:100%;
      height:100%;
    }
  }
  .zhuanchang{
    width:100%;
    height:2.81rem;
    background: #cccccc;
    .oul{
      width:100%;
      height:100%;
      overflow-x: auto;
      display: -webkit-box;
      // padding:0.1rem;
      li{
        width:1.31rem;
        height:2.57rem;
        margin-left:0.1rem;
        background:#ffffff;
        img{
          width:100%;
          height:1.69rem;
        }
        p{
          font-size: 0.14rem;
          width:1.31rem;
          white-space:nowrap;
          overflow:hidden;
          text-overflow: ellipsis;
          line-height: 0.25rem;
        }
      }
    }
  }
  .loadmore{
    width:100%;
    height:0.2rem;
    background:#f2f2f2;
    p{
      font-size: 0.12rem;
      text-align: center;
      line-height: 0.2rem;
    }
  }
  
  .fk-foot1{
    width:100%;
    height:0.44rem;
    img{
      width:50%;
      height:0.44rem;
      float:left;
    }
  }
  .fk-foot2{
    width:100%;
    height:1.1rem;
    background:#f2f2f2;
    ul{
      width:100%;
      height:1.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      li{
          width:0.94rem;
          height:0.26rem;
          background:red;
          float: left;
          text-align: center;
          margin-left:0.2rem;
          line-height: 0.26rem;
          background: #ffffff;
      }
    }
  }
  .fk-foot3{
    width:100%;
    height:1.34rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align:center;
    align-items: center;
    .clear{
      width:2.68rem;
      height:0.93rem;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: center;
      border-bottom:1px solid #cccccc;
      border-top:1px solid #cccccc;
      li{
        a{
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        
      }
    }
  }
}



.foot{
  background:#ffffff;
}
</style>