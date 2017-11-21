<template>
	<div class="main">
		<nav>
			<ul>
				<li>全部</li>
				<li>裤装</li>
				<li>上衣</li>
				<li>衬衫</li>
				<li>裙装</li>
				<li>毛衣</li>
			</ul>
		</nav>
		<div class="shop">
	       <ul v-for="data in datalist">
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

  name: 'datalist',

  data () {
    return {
    	datalist:[]
    }
  },
  mounted(){
  	console.log(this.$route.params.aaa)
  	fetch(`/operation/${this.$route.params.aaa}/groups?opt_type=2&offset=0&size=100&sort_type=DEFAULT&pdduid=0`).then(res=>res.json()).then(res=>{
  		console.log(res.goods_list)
  		this.datalist=res.goods_list
  	})
  },
  methods:{
  	handClick(id){
      console.log(id)
          router.push(`/shopCar/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
	.main{
		// position:absolute;
	 //    top:0;
	 	overflow:hidden;
	    z-index:101;
	}
	nav{
		position:fixed;
		top:0;
		z-index:101;
		background:white;
		ul{
			overflow:hidden;
			li{
				float:left;
				list-style:none;
				margin:0.3rem 0.4rem;
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