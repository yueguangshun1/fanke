<template>
  <div class="fk-list">
    <fk-content class="fk-content">
        <fk-header tit="列表" class="header"></fk-header>
        <div class="fk-nav">
            <ul>
                <li>
                    <a href="#">新品</a>
                </li>
                <li>
                    <a href="#">销量</a>
                </li>
                <li>
                    <a href="#">评价</a>
                </li>
                <li>
                    <a href="#">价格↕</a>
                </li>
            </ul>
        </div>
        <div class="list">
            <ul>
                <li v-for="(ele,index) in listData" :key="index">
                    <router-link :to="{name:'detail',params:{ pid:ele.pid}}">
                        <img :src="ele.img_url">
                        <span>{{ele.p_name}}</span>
                        <p>{{ele.price}}元</p>
                    </router-link>
                </li>
            </ul>
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
        default: ''
      }
    },
    data(){
      return{
        type:1,
        listData:[]
      }
    },
    mounted(){
        const id=this.$route.params.cate_id
        console.log(this.$route.params.cate_id)
        axios.get("http://10.9.171.4:3000/cate/getList?cart_id="+id).then(res=>{ 
            this.listData = res.data
            console.log(res.data)
 
        })
    }
   
}
</script>
<style scoped lang="scss">
.fk-list{
    width:100%;
    height:100%;
    box-sizing: border-box;
    .header{
        position: relative;
    }
    .fk-content{
        .fk-nav{
            width:100%;
            height:0.38rem;
                ul{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    li{
                        width:0.937rem;
                        height:0.38rem;
                        text-align: center;
                        line-height: 0.38rem;
                        a{
                            color:black;
                        }
                    }
                }
            }
            .list{
                width:100;
                height:100%;
                    ul{
                        li{
                            a{
                                float: left;
                                width:1.81rem;
                                height:2.25rem;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                text-align: center;
                                img{
                                    width:1.45rem;
                                    height:1.45rem;
                                }
                                span{
                                    width:1.81rem;
                                    white-space:nowrap;
                                    overflow:hidden;
                                    text-overflow: ellipsis;
                                    margin-top:0.1rem;
                                } 
                            }        
                        }
                    }
                }
            }

        }

.list ul li:nth-child(even){
    float: right;
}

</style>