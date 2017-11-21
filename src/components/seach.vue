<template>
	<div class="main">
		<Complete></Complete>
    <div>
      <div class="left">
        <ul>
          <li>11</li>
          <li>11</li>
          <li>11</li>
          <li>11</li>
          <li>11</li>
          <li>11</li>
          <li>11</li>
        </ul>
      </div>
    </div>
	</div>
</template>

<script>
import Complete from '@/components/common/Complete.vue';
export default {

  name: 'seach',

  data () {
    return {

    }
  },
  components:{
  	Complete,
  }
}
</script>

<style lang="scss" scoped>
  .main{
    margin-top:1rem;
  }
</style>