<template>
  <div class="about">
      <img :src='pic'>
      <div class="article">
            <img :src='pic1'>
            <router-link class="fan" to='/home'>Daniel Fan</router-link>
      </div>
      
  </div>
</template>

<script>
import selfie from '../assets/selfie.png'
import logo from '../assets/Logo-Slogan.png'
export default {
    name:'AboutMe',
    data() {
        return {
            pic:selfie,
            pic1:logo,
        }
    },

}
</script>

<style lang='less' scoped>

.about{
    margin: 20px auto;
    width: 100%;
    background-color: rgb(228, 225, 225); 
    height: 500px;
    display: flex;
    img{
        flex: 0 0 300px;
    }
    .article{
        flex: 1 1 auto;   
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{ 
           flex:0 0 auto;
           margin: 0 30px;
        }
        .fan{
            font-size: 20px;
            text-decoration: none;
            text-align: center;
            border: grey 1px solid;
            background-color: white;
            padding: 0 20px;
            color:grey;
            margin: 10px;
        }
        
    }
    
}

</style>