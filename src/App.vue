<template>
  <div id="app">
    <headerbar></headerbar>
    <section>
      <router-view></router-view>  
    </section>
    <bottom></bottom>
    <scroll></scroll>
    <!-- <Spin></Spin> -->
  </div>
</template>

<script>
import headerbar from '@/components/common/headerbar'
import bottom from '@/components/common/bottom'
import scroll from '@/components/common/scroll.vue';
import Spin from '@/components/common/Spin.vue';
export default {

  name: 'App',

  data () {
    return {

    }
  },
  components:{
    headerbar,
    bottom,
    scroll,
    Spin
  },
}
</script>

<style lang="css">
	*{
		margin: 0;
		padding:0;
	}
	html,body{
		width: 100%;
		height:100%;
	}
  section{
     /*position: relative;*/
    margin-top:1rem;
  }
</style>
