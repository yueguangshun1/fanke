import axios from "axios"
export default {
    namespaced: true,
    state:{
        listData:{},
        type:1
       
    },
    getters:{
        //辅助组件获取数据
        listData:state=>state.listData,
        list:state=>state.list
    },
    mutations:{
        //修改数据
        setlistData(state,payload){
            state.listData = payload.listData  //把总数据  条目保存起来
        },
        setlist(state,payload){
            state.list = payload.list
        }
       
    }, 
    actions:{
        getlistData(context,payload){
            axios.get("http://10.9.171.4:3000/cate/getListData").then(res=>{
                context.commit("setlistData",{listData:res.data})
                console.log(res.data)
            })
        }
    }
}