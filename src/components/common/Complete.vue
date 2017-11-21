<template>
    <div class="search">
	          <AutoComplete
		        v-model="value1"
		        :data="data1"
		        @on-search="handleSearch1"
		        @on-select="handleSelect"
		        placeholder="搜索商品"
		        style="width:6.5rem">
		        <Option v-for="data in datalist" :value="data" :key="data">{{ data }}</Option>
		       </AutoComplete>
		        <Button type="ghost" shape="circle" icon="ios-search" @click="handleClick(datalist)"></Button>
    </div>
</template>
<script>
import router from "@/router";
    export default {
        data () {
            return {
                value1:'',
                datalist:[],
                data1:[]
            }
        },
        methods: {
            handleSearch1 (value) {
               // 搜索
                fetch(`/search_suggest?query=${value}&pdduid=0`).then(res=>res.json()).then(res=>{
                	console.log(res)
                	this.datalist=res.suggest
                })
            },
            handleSelect(value){
            	this.datalist=value
            },
            handleClick(datalist){
            	console.log(datalist)
                 router.push(`/searchDatalist/${datalist}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
	.search{
		width:7.5rem;
		ul{
			li{
				width:200px;
				font-size:16px;
				margin:10px 0
			}
		}
	}
</style>