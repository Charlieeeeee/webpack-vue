<template>
  <div class="nav-container">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
        <el-menu-item v-for="(item,index) in navRoutes" :key="item.name" :index="`${index+1}`"
            @click="handleClick(item.path)">
            <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.title}}</span>
            </template>
        </el-menu-item>
    <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
    </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import { navRoutes } from './../routes'

export default {
    name:"Nav",
    data:()=>({
        navRoutes:navRoutes
    }),
    methods:{
      handleClick(path){
          if(this.$route.path === path) return;
          this.$router.push({path})
      }
    }
}
</script>

<style scoped lang="scss">
.nav-container{
    width: 200px;
    height: 100vh;
    border-right: solid 1px #e6e6e6;

    .el-menu{
        border-right: none;
    }
}
</style>