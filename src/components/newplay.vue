<template>
	<div class="main">
		<nav>
      <ul>
        <li class="left">
          <div class="nav-name">
          <i class="iconfont icon-box"></i><span>邻里团</span>
          </div>
          <div class="title">
            身边的人都在拼
          </div>
          <div class="box">
            <div class="img" v-for="data in navlist">
              <img :src="data">
            </div>
          </div>
        </li>
        <li class="right">
          <div class="nav-name">
          <i class="iconfont icon-survey"></i><span>精选专题</span>
          </div>
          <div class="title">
            你要的,都整理好了
          </div>
          <div class="img" v-for="data in rightlist">
            <img :src="data.thumb_url">
          </div>
        </li>
      </ul>
    </nav>
    <div class="center">
      <i class="iconfont icon-bags"></i>
      <span>精选新品</span>
    </div>
    <div class="shop">
       <ul >
         <li v-for="data in shoplist" @click="handClick(data.goods_id)">
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

  name: 'newplay',

  data () {
    return {
        navlist:[],
        rightlist:[],
        shoplist:[]
    }
  },
  mounted(){
    fetch('/avatars_subjects?pdduid=0').then(res=>res.json()).then(res=>{
      console.log(res)
      this.navlist=res.avatars
      this.rightlist=res.goods_list
    })
    fetch('/v5/newlist?page=1&size=50&ver=1510656000000&pdduid=0').then(res=>res.json()).then(res=>{
      console.log(res)
      this.shoplist=res.goods_list
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
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
	.main{
  overflow:hidden;
  height:100%;
  font-size:16px;
  margin-bottom:1.5rem;
}
nav{
  font-size:16px;
  ul{
      display:flex;
    li{
      text-align:left;
      flex:1;
      list-style:none;
    }
  }
  .nav-name{
     
    i{
      display:inline-block;
      height:0.4rem;
      font-size:24px;
    }
    span{
      font-size:16px;
      display:inline-block;
    }
  }
  .box{
    text-align:center;
  }
  .img{
    float:left;
    // width:0.64rem;
    // height:0.64rem;
  }
  img{
    width:0.64rem;
    height:0.64rem;
  }
  .title{
    font-size:16px;
  }
}
.center{
  width:7.5rem;
  text-align:center;
  height:1rem;
  line-height:1rem;
  color:red;
    span{
      
      font-size:16px;
      display:inline-block;
    }
  }
  .shop{
    width:7.5rem;
    height:100%;
    margin-bottom:2rem;
    // display:flex;
    ul{
        
      li{
        width:3.75rem;
        float:left;
        list-style:none;
        span{
          font-size:16px;
        }
        p{
          height:0.8rem;
          overflow:hidden;
        }
        strong{
          color:red;
        }
      }
    }
  }
</style>