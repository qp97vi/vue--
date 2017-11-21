<template>
	<!-- <div class="main">
    <swipe class="my-swipe">
        <swipe-item v-for="data in datalist">
          <img :src="data.img_url">
        </swipe-item>
    </swipe>
    <div class="quick">
        <span>
          限时秒杀
        </span>
        <span>
          品牌满仓
        </span>
        <span>
          名牌折扣
        </span>
        <span>
          海淘
        </span>
        <span>
          助力享单
        </span>
        <span>
          爱逛街
        </span>
        <span>
          9块9特卖
        </span>
        <span>
          11.11签到
        </span>
    </div>
    <nav>
       <img :src="imglist">
    </nav>
    <div class="shop">
      <ul>
        <li v-for="data in shoplist" @click="handClick(data.goods_id
)">
          <img :src="data.image_url">
          <div>
            <p>{{data.goods_name}}</p>
            <div class="decail">
              <strong>￥{{data.normal_price}}</strong>
              <router-link to="#" tag="span">去拼单 ></router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    
  </div> -->
  <router-view></router-view>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import router from "@/router";


// import "vue-swipe/dist/vue-swipe.css"; //css 模块化 导入
// import { Swipe, SwipeItem } from 'vue-swipe';

export default {

  name: 'index',

  data () {
    return {
    	datalist:[],
      imglist:[],
      shoplist:[]
    }
  },
  mounted(){
  	fetch('/api/fiora/bannerindex/query/platform?platform=1&pdduid=0&is_back=1').then(res=>res.json()).then(res=>{
  		// console.log(res.result)
  		this.datalist=res.result;
  	});
    fetch('/carnival_images?types[]=home_banner&types[]=floating_window&types[]=popup&types[]=popup_button&pdduid=0&is_back=1').then(res=>res.json()).then(res=>{
      // console.log(res)
      this.imglist=res.carnival_images[0].image_url;
    });
    fetch('/v4/goods?page=2&size=20&platform=1&list_id=index_goods_rGFcXk&pdduid=0&is_back=1').then(res=>res.json()).then(res=>{
      console.log(res.goods_list[0])
      this.shoplist=res.goods_list;
    })
  },
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
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
  // position:relative;
  overflow:hidden;
  height:100%;
}
	.my-swipe{
    height:150px;
    width:100%;
    img{
      width:100%
    }
  }
.quick{
  width:7.5rem;
  height:100%;
  span{
    padding:0;
    font-size:16px;
    display:inline-block;
    width:1.64rem;
    height:0.43rem;
    text-align:center;
  }
}
nav{
  img{
    width:100%;
  }
}
.shop{
  font-size:16px;
  img{
    width:100%;
  }
  p{
    width:100%;
    height:0.8rem;
    overflow:hidden;
  }
  strong{
    color:red;
  }
  .decail{
    span{
      color:white;
      float:right;
      background:red;
    }
  }
}

</style>




