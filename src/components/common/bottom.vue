<template>
	<footer>
		<ul>
			<router-link to="/index/shop" tag="li" activeClass="active"><i class="iconfont icon-store"></i><span>首页</span></router-link>
			<router-link to="/newplay" tag="li" activeClass="active"><i class="iconfont icon-favorites"></i><span>新品</span></router-link>
			<router-link to="/seach" tag="li" activeClass="active"><i class="iconfont icon-originalimage"></i><span>搜索</span></router-link>
			<router-link to="/tel" tag="li" activeClass="active"><i class="iconfont icon-atm"></i><span>聊天</span></router-link>
			<router-link to="/center" tag="li" activeClass="active"><i class="iconfont icon-smile"></i><span>个人中心</span></router-link>
		</ul>
	</footer>
</template>

<script>
export default {

  name: 'bottom',

  data () {
    return {

    }
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
	footer{
		text-align:center;
		width:7.5rem;
		position: fixed;
		bottom:0;
		font-size: 16px;
		
		background:#fff;
		z-index:10;
		ul{
			li{
				list-style:none;
				float:left;
				padding:0 0.05rem;
				i{
					display:block;
					font-size:24px;
					height:0.4rem;
					margin-bottom:0.2rem;
				}
				span{
					display:inline-block;
					height:0.25rem;
					width:1.32rem;
					line-height: 0.25rem;
				}
			}
		}
		.active{
			color:red;
		}
	}
</style> 
