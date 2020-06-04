<template>
  <div class="container">
      <div class="img"></div>
      <p>vue</p>
      <p class="number">0123456789</p>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
    name:"home",
    mounted(){
    //    axios.get
       this.$nextTick(()=>{
            console.log('NODE_ENV:',process.env.NODE_ENV)
       })
    }
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'number';
    src: url('./../assets/DS-DIGIB.ttf');
}
    .container{
        color: green;
        .img{
            width: 200px;
            height: 100px;
            background: url('./../assets/bg.png') no-repeat center;
        }
        .number{
            color: #000;
            font-family: number;
            font-size: 50px;
        }
    }
</style>