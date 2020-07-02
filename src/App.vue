<template>
<div class="home">
    <div class="home-nav">
        <Nav />
    </div>
    <div class="home-main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</div>
</template>

<script>
import Nav from '@/components/nav'

export default {
    name:"App",
    components:{
        Nav
    }
}
</script>

<style scoped lang="scss">
.home{
    display: flex;

    .home-nav{
        width: 200px;
    }
    .home-main{
        width: calc(100% - 200px);
        padding: 20px;
    }
}
</style>