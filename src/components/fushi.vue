<template>
	<div class="main">
		<nav>
			<ul >
				<li v-for="data in infos" @click="handclick(data.id)">{{data.opt_name}}</li>
			</ul>
		</nav>
		<div class="shop">
	       <ul v-for="data in list">
	         <li @click="handClick(data.goods_id)">
	            <img :src="data.thumb_url">
	            <div>
	              <p>{{data.goods_name}}</p>
	            </div>
	            <div class="decail">
	              <strong>￥{{data.normal_price}}</strong>
	            </div>
	         </li>
	       </ul>
    	</div>
	</div>
</template>

<script>
import router from "@/router";
export default {

  name: 'fushi',

  data () {
    return {

    }
  },
  mounted(){
  	//把值传给actions
  	if(!this.$store.state.list){
  		this.$store.dispatch("aaa","/operation/14/groups?opt_type=1&size=100&offset=0&pdduid=0")
  	}
  },
  computed:{
  	list:function(){
  		return this.$store.state.list?this.$store.state.list:[]
  	},
  	infos:function(){
  		return this.$store.state.infos?this.$store.state.infos:[]
  	}
  },
  methods:{
  	handclick(id){
  		// console.log(id)
  		router.push(`/datalist/${id}`)
  	},
  	handClick(id){
  		router.push(`/shopCar/${id}`)
  	}
  }
}
</script>

<style lang="scss" scoped>
	.main{
  // position:relative;
  overflow:hidden;
  height:100%;
  margin-top:50px;
  margin-bottom:1.5rem;
}
nav{
	ul{
		overflow:hidden;
		li{
			float:left;
			font-size:16px;
			width:1.5rem;
			text-align:center;
			margin:0.3rem 0.1rem;
		}
	}
}
.shop{
	background:#fafafa;
    width:7.5rem;
    height:100%;
    margin-bottom:2rem;
    // display:flex;
    ul{
        width:3.75rem;
        float:left;
      li{
        
        list-style:none;
        span{
          font-size:16px;
        }
        p{
          height:0.8rem;
          overflow:hidden;
          line-height:0.4rem;
        }
        strong{
          color:red;
        }
      }
    }
  }
</style>