<template>
    <BackTop :height="400" :bottom="100">
        <div class="top">返回顶端</div>
    </BackTop>
</template>

<script>
    export default {
        
    }
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style scoped>
    .top{
        font-size: 16px;
        z-index: 100;
        padding: 10px;
        background: #ccc;
        color: #fff;
        text-align: center;
        border-radius: 50%;
    }
</style>