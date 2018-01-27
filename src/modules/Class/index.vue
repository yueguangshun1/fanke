<template>
  <div class="fk-list">
    <fk-content class="fk-content" id="content">
      <fk-header tit="分类"></fk-header>
      <div class="con_content">
          <div class="left">
            <ul>
              <li v-for="(ele,index) in classData" 
              :key="index" 
              @click="change(ele.cate_id)"
              :class="[ele.cate_id==type?'curLi':'']"
              >
                {{ele.cate_name}}
              </li>
            </ul>
          </div>

          <div class="right">
            <ul v-for="ele in classData" :key="ele.cate_id" v-if="ele.cate_id==type">
                <li v-for="item in ele.children" :key="item.cate_id">
                  <router-link :to="{name:'list',params:{cate_id:item.cate_id}}">
                    <img :src="item.cate_img" />
                    <span>{{item.cate_name}}</span>

                  </router-link>
                </li>
            </ul>
          </div>
      </div>
    </fk-content>
    <fk-footer></fk-footer>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    props: {
      tit: {
        type: String,
        default: '分类'
      }
    },
    data(){
      return{
        type:1,
        classData:[]
      }
    },
  methods:{
     change(id){
      this.type = id
      console.log(id,this.type)
    },
    getDataUp(){
      axios.get("http://10.9.171.4:3000/cate/getListData").then(res=>{ 
        this.classData = res.data
        console.log(res.data,1223435346)
      })
    }
  },
  mounted(){
      this.getDataUp()
  }
}
</script>


<style scoped lang="scss">
.fk-list{ 
  // margin-top:0.51rem;
  box-sizing: border-box;
  width:100%;
  height:auto;
  margin-top: 0 auto;
  .header{
    position: relative;
  }
  .con_content{
    display: flex;
    justify-content: space-between;
  .left{
      width:20%;
      height:7rem;
      background:#e5e5e5;
      ul{
        width:100%;
        height:100%;
        li{
          width:100%;
          height:0.37rem;
          text-align: center;
          line-height: 0.37rem;
          border-bottom:1px solid #ffff;
        }
        .curLi{
          background: #fff;
          color: #f33;
        }
      }
    }
    .right{
      flex: 1;
      height:100%;
      float: left;
      ul{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        li{
          a{
            float: left;
          width:1.02rem;
          height:1.07rem;
          display: flex;
          flex-direction: column;
          align-items: center;
            img{
              width:0.76rem;
              height:0.76rem;
            }
            span{
              text-align: center;
              color:#ccc;
            }
          }
          
        }
      }
    }
  }
  

  
}

</style>