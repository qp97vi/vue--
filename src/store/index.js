import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    	list:null,
    	infos:"",
  },
  actions:{
  		aaa:function(state,payload){
  			// console.log("请求数据")
  			fetch(payload).then(res=>res.json()).then(res=>{
  				console.log(res)
  				store.commit("a",res.goods_list)
  				store.commit("b",res.opt_infos)
  			})
  		}
  },
  mutations: {
    	a:function(state,payload){
    		state.list=payload;
    		console.log(state.list)
    	},
    	b:function(state,payload){
    		state.infos=payload;
    		console.log(state.infos)
    	}
  }
})


export default store