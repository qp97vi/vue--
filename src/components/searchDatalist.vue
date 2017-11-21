<template>
	<div class="main">
		<nav>
			<span>
				<Dropdown trigger="click" style="margin-left: 20px">
			        <a href="javascript:void(0)">
			           综合排序
			            <Icon type="arrow-down-b"></Icon>
			        </a>
			        <DropdownMenu slot="list">
			            <DropdownItem>综合排序</DropdownItem>
			            <DropdownItem>评分排序</DropdownItem>
			            <DropdownItem>价格从高到低</DropdownItem>
			        </DropdownMenu>
			    </Dropdown>
			</span>
			<span>销量优先</span>
			<span>价格从低到高</span>

		</nav>
		<div class="shop">
	       <ul v-for="data in datainfo">
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

  name: 'searchDatalist',

  data () {
    return {
    	datainfo:[]
    }
  },
  mounted(){
  	console.log(this.$route.params.bbb);
  	fetch(`/search?q=${this.$route.params.bbb}&page=1&size=50&requery=0&sort=default&pdduid=0`).then(res=>res.json()).then(res=>{
  		console.log(res.items)
  		this.datainfo=res.items
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

nav{
	span{
		display:inline-block;
		width:2rem;
		font-size:16px;
    height:30px;
    line-height:30px;
	}
}
.shop{
	background:#fafafa;
    width:7.5rem;
    height:100%;
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