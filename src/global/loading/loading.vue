<template>
    <div class="loading" v-show="showLoading">
        <div class="loading_box">
            <div class="modal" v-show="showModal"></div>
            <img src="./../../assets/imgs/loading.gif">
        </div>
    </div>
</template>
<script>
    export default{
        name:'y-loading',
        data(){
            return {
                showLoading:true,
                showModal:true
            }
        }
    }
</script>

<style lang="scss" scoped >
    .loading{
        width: 100%;
        height: 100%;
        position:fixed;
        top:0;
        z-index:600;
        .loading_box{
            width:100%;
            height:100%;
            position:relative;
            .modal{
                width: 100%;
                height:100%;
                position:fixed;
                top:0;
                left:0;
                background: #000;
                opacity:0.5;
            }
            img{
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
            }
        }
    }
</style>
