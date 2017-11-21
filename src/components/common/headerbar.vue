<template>
	<nav>
		<ul >

			<router-link to="/index/shop"tag="li" activeClass="active">首页</router-link>
			<router-link to="/index/fushi" tag="li" activeClass="active">服饰</router-link>
			<router-link to="#" tag="li" activeClass="active">男装</router-link>
			<router-link to="#" tag="li" activeClass="active">鞋包</router-link>
			<router-link to="#" tag="li" activeClass="active">母婴</router-link>
			<router-link to="#" tag="li" activeClass="active">家居</router-link>
			<router-link to="#" tag="li" activeClass="active">电器</router-link>
			<router-link to="#" tag="li" activeClass="active">美食</router-link>
			<router-link to="#" tag="li" activeClass="active">家纺</router-link>
			<router-link to="#" tag="li" activeClass="active">美妆</router-link>
			<router-link to="#" tag="li" activeClass="active">手机</router-link>
			<router-link to="#" tag="li" activeClass="active">水果</router-link>
			<router-link to="#" tag="li" activeClass="active">运动</router-link>	
		
		</ul>
	</nav>
</template>

<script>
export default {

  name: 'headerbar',

  data () {
    return {

    }
  },
 
 
 mounted(){
 	// fetch('/v4/goods?page=2&size=20&platform=1&list_id=index_goods_ocEHvb&pdduid=0').then(res=>res.json()).then(res=>{
  // 		console.log(res);
  	// })
 },
 methods:{
 	cc(){
 		alert(1)
 	}
 }
}
</script>

<style lang="scss" scoped>
	nav{
		position:fixed;
	   	top:0px;
	   	left:0px;
		width:7.5rem;
		height:1rem;
		font-size: 16px;
		line-height: 1rem;
		z-index:10;
		background:#fff;
		ul{
				width:100rem;
				height:1rem;
				color: #333;
				text-align: center;
				position:relative;
				white-space: nowrap;
				overflow-x: auto;
				overflow-y: hidden;
				z-index: 10010;
   			li{
   				float:left;
   				list-style: none;
   				padding:0 0.09rem;
   				height:1rem;
   			}
   		}
   		.active{
   			border-bottom:1px solid red;
   		}
	}
</style>