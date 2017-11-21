<template>
<div>
	<div class="main">
    <div v-if="shopinfo" class="top">
      <img :src="shopinfo[12].hd_thumb_url">
      <div class="pirce">
        <strong>￥{{shopinfo[12].price}}</strong><del>￥{{shopinfo[12].market_price}}</del>
        <div class="sales"><span>已拼{{shopinfo[12].sales}}件</span><span>{{shopinfo[12].customer_num}}人拼单</span></div>
      </div>
      <p>{{shopinfo[12].goods_name}}</p>
    </div>
    <div class="baoyou">
      <ul>
        <li>
          <i class="iconfont icon-success"></i><span>全场包邮</span>
        </li>
        <li>
          <i class="iconfont icon-success"></i><span>7天退换</span>
        </li>
        <li>
          <i class="iconfont icon-success"></i><span>48小时发货</span>
        </li>
        <li>
          <i class="iconfont icon-success"></i><span>假一赔十</span>
        </li>
        <li>
          <i class="iconfont icon-more"></i>
        </li>
      </ul>
    </div>
     
  </div>
  <div class="shop" v-show="modal" v-if="shopinfo">
        <div class="top">
          <div class="img">
            <img :src="shopinfo[12].thumb_url">
          </div>
          <div class="price">
            <strong>￥{{shopinfo[12].price}}</strong>
          </div>
        </div>
        <div class="num">
          <span>数量</span>
          <div class="add">
            <button @click="jian(number)">-</button>
            <input type="text":value="number" >
            <button @click="add(number)">+</button>
          </div>
        </div>
        <div class="close" @click="modal =!modal">
          <Icon type="close"></Icon>
        </div>
        <div class="btn" >
          <Button type="error" long @click="modal=!modal">确定</Button>
        </div>
  </div>
  <footer>
    <ul v-if="shopinfo">
      <router-link to="/index" tag="li" ><i class="iconfont icon-store"></i><span>首页</span></router-link>
      <router-link to="/newplay" tag="li"><i class="iconfont icon-favorites"></i><span>收藏</span></router-link>
      <router-link to="/#" tag="li" class="dandu s">
        <div>
          <span>￥{{shopinfo[12].normal_price}}</span>
          <span class="btn">单独购买</span>
        </div>
      </router-link>
      <li  class="dandu q" @click="modal =!modal">
        <div >
          <span>￥{{shopinfo[12].price}}</span>
          <span class="btn">一键拼单</span>
        </div>
      </li>
    </ul>
  </footer>
     
  </div>

</template>

<script>
export default {

  name: 'shopCar',

  data () {
    return {
    	shopinfo:null,
      modal: false,
      number:1
    }
  },
  mounted(){
  	console.log(this.$route.params.sss);
  	fetch(`/recommendation?goods_id=${this.$route.params.sss}&referrer=goods&with_mall_rec=1&offset=0&count=20&list_id=goods_detail_rec_list_qNe2Z0&pdduid=0`).then(res=>res.json()).then(res=>{
  			this.shopinfo=res.list
  			console.log(res)
  	})
  },
 methods: {
          add(number){
              this.number=this.number+1
          },
          jian(number){
            
            if(!this.number<1){
              this.number=this.number-1;
            }
          }
      }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
  .main{
    position:absolute;
    top:0;
    z-index:101;
    .top{
        text-align:center;
      img{
        width:100%
      }
      strong{
        color:red;
        font-size:20px;
        font-weight:800;
        float:left;
      }
      del{
        float:left;
        margin-top:0.1rem;
      }
      .pirce{
        overflow:hidden;
        line-height:30px;
      }
      .sales{
        float:right;
      }
      p{
        width:7.5rem;
        height:1rem;
        overflow:hidden;
        font-size:16px;
        text-align:left;
      }
    }
    .baoyou{
        background:#fafafa;
        ul{
          overflow:hidden;
          li{
            float:left;
            margin:0 0.2rem;
            i{
              font-size:20px;
            }
            .icon-success{
              color:red;
            }
          }
        }
    }
  }

    
  footer{
    text-align:center;
    width:7.5rem;
    position: fixed;
    bottom:0;
    font-size: 16px;
    z-index:101;
    background:#fff;
    
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
  .dandu{
    color:white;
    text-align:center;
    padding:0 0.3rem;
    span{
      display:block;
      width:1.5rem;
    }
    .btn{
      margin-top:0.4rem;
      margin-bottom:0.11rem;
    }
  }
  .s{
    background:#f3aba7;
  }
  .q{
    padding:0;
    background:red;
    div{
      padding:0 0.505rem;
    }
  }
  .shop{
      
      width:7.5rem;
      position:fixed;
      bottom:0;
      z-index:300;
      background:white;
    .top{
      overflow:hidden;
      padding:0 0.1rem;
    }
    .img{
      float:left;
      img{
        width:1.5rem;
        height:1.5rem;
      }
    }
    .price{
      float:left;
      padding-top:0.5rem;
      padding-left:0.2rem;
      color:red;
      font-size:16px;
    }
    .num{
      padding:0 0.1rem;
      margin:0.5rem 0;
      overflow:hidden;
      float:left;
      width:7.5rem;
      span{
        display:inline-block;
        width:0.5rem;
        height:0.5rem;
        line-height:0.5rem;
      }
      .add{
        width:1.8rem;
        float:right;
      }
      button{
        width:0.5rem;
        height:0.5rem;
      }
      input{
        width:0.5rem;
        height:0.5rem;
      }
    }
    .close{
      position:absolute;
      right:0.1rem;
      top:0;
      font-size:24px;
    }
    .btn{
      margin-top:3rem;
    }
  }
</style>