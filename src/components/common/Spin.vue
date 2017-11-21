<template>
    <div class="center">
        <Row>
            <Col class="demo-spin-col" span="8">
                <Spin fix>
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                </Spin>
            </Col>
        </Row>
    </div>
</template>

<script>
    // 部分样式代码冗长，未作展示
    export default {
        
    }
</script>

<style lang="scss" scoped>
	 .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: absolute;
        top:3.5rem;
        left:2.5rem;
        z-index:360;
        // border: 1px solid #eee;
    }
    .center{
        position:relative;
    }
</style>