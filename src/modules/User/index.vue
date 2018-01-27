<template>
  <div class="fk-custom">
    
    <fk-content class="content">
      <fk-header tit="个人中心"></fk-header>

      <div class="nav">
        <div class="clear">
            <a href="">
              <i class="iconfont icon-iconfonticonfontjixieqimo" id="icon1"></i>
            </a>
        </div>
        <div class="clear-1">
          <img src="http://i10.m.vancl.com/Content/H5/img/H5-V0.jpg">
          <p>18865555</p>
          <a href="#"><img src="http://i10.m.vancl.com/Content/H5/img/H5-NewV0.png"></a>
        </div>
        <div class="clear-2">
          <ul>
            <li>积分：0</li>
            <li>余额：0</li>  
            <li>成长值：0</li>         
          </ul>
        </div>
      </div>
      
      <div class="uc-order">
        <div class="uc-order_1">
          <span>全部订单</span>
          <i class="iconfont icon-toLeft" id="icon1"></i>
        </div>

        <ul>
          <li>
            <a href="#">
              <i class="iconfont icon-iconfonticonfontjixieqimo" id="icon1"></i>
              <span>进行中</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont icon-iconfonticonfontjixieqimo" id="icon1"></i>
              <span>进行中</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont icon-iconfonticonfontjixieqimo" id="icon1"></i>
              <span>进行中</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont icon-iconfonticonfontjixieqimo" id="icon1"></i>
              <span>进行中</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="uc-section">
        <ul>
          <li>
            <a href="">
              <span id="span1"></span>
              <p>充值返现</p>
              
            </a>
            <span class="span2">冲一百返一百</span>
          </li>
          <li>
            <a href="">
              <span id="span1"></span>
              <p>充值返现</p>
    
            </a>
          </li>
          <li>
            <a href="">
              <span id="span1"></span>
              <p>充值返现</p>

            </a>
          </li>
           <li>
            <a href="">
              <span id="span1"></span>
              <p>充值返现</p>

            </a>
          </li>
           <li>
            <a href="">
              <span id="span1"></span>
              <p>充值返现</p>

            </a>
          </li>
        </ul>
      </div>
    </fk-content>
    <fk-footer></fk-footer>
  </div>
</template>
<script>
  export {
   
  }
</script>
<style scoped lang="scss">
.fk-custom{
  width:100%;
  height:100%;
  background: #f0eff5;
  .content{
    width:100%;
    height:auto;
    .nav{
      width:100%;
      height:2.13rem;
      background:url(http://i10.m.vancl.com/Content/H5/img/uc-topbgd.png) no-repeat center top;
      background-size: cover;
      .clear{
        width:100%;
        height:0.33rem;
        a{
           float: right;
           line-height: 0.33rem;
            .iconfont{
              font-size: 0.2rem;
              margin-right:0.2rem;
              color:#ffff;
            }
        }
       
      }
      .clear-1{
        width:100%;
        height:1.33rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        img{
          border-radius: 0.5rem;
        }
        a{
          img{
            width:0.6rem;
            height:0.18rem;
          }
        }
      }
      .clear-2{
        width:100;
        height:0.21rem;
        
        ul{
          display: flex;
          justify-content: center;
          flex-direction: row;
          align-items: center;
          li{
            width:1.2rem;
            height:0.21rem; 
            text-align: center;
            color:#fff;
            font-size:0.14rem;
          }
        }
      }
    }
    .uc-order{
      height:1.11rem;
      // padding:0.1rem 0;
      margin:0.1rem 0;
      .uc-order_1{
        height:0.41rem;
        background: #ffffff;;
        padding:0 0.1rem;
        span{
          line-height: 0.41rem;
        }
        i{
          float:right;
          line-height: 0.41rem;
          color: #cccccc;
        }
      }

      ul{
        height:auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        background: #ffffff;
        li{
          width:25%;
          height:0.6rem;
          display: flex;
          justify-content:center;
          flex-direction: row;
          padding:0.1rem 0;
          a{
            margin:0.3rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .iconfont{
              font-size: 0.20rem;
              color:black;
            }
            span{
              color:black;
            }
          }
         
        }
      }
    }
    .uc-section{
      height:2.71rem;
      // background:red;
      background: #ffffff;
      ul{
        height:2.71rem;
        li{
          width: 25%;
          float: left;
          height:0.93rem;
          border-bottom:1px solid #cccccc;
          a{
            margin:0.15rem 0;
            display: inline-block;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border-right:1px solid #cccccc;
            #span1{
              display: inline-block;
              width: 0.36rem;
              height:0.36rem;
              // background-size: 3rem 42rem;
              background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat 0 0;
              background-size:38px; 
            }
            span{
              font-size: 0.12rem;
              color:black;
            }
            p{
              font-size: 0.12rem;
              color:black;
            }
          }
         .span2{
           font-size: 0.12rem;
         }
        }
      }
    }
  }
}
</style>