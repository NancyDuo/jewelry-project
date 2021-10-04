<template>
<div class="wrapper">
        <div class="topImg">
        <!-- //<img src="" alt=""> -->
        </div> 
  <div class="main">
      <div class="link-container">
            <router-link to="/home" class="product">
            <img :src="pic" alt="">
            <router-link to="/home/product">
            <span>I am demo</span>
            </router-link>
            </router-link> 
            <router-link to="/home" class="product">
            <img :src="pic" alt="">
            </router-link>
            <router-link to="/home" class="product">
            <img :src="pic" alt="">
            </router-link>
            <router-link to="/home" class="product">
            <img :src="pic" alt="">
            </router-link>
            <router-link to="/home" class="product">
            <img :src="pic" alt="">
            </router-link>
            <router-link to="/home" class="product">
            <img :src="pic" alt="">
            </router-link>
            <router-link to="/home" class="product">
            <img :src="pic" alt="">
            </router-link>
            <router-link to="/home" class="product">
            <img :src="pic" alt="">
            </router-link>                   
      </div>

  </div>
</div>
  
</template>

<script>
import Denon from '../assets/tenon.png'
import write from '../assets/slider-photo/write.jpeg'
export default {
    name:'Collection',
    data() {
        return {
            pic:Denon,
        }
    },

}
</script>

<style lang='less' scoped>
.wrapper{
    .topImg{
        margin: 50px auto;
        padding: 0px;
        height: 500px;
        width: 100%;
        background: url('../assets/slider-photo/write.jpeg') no-repeat;
        background-size: cover;
    }
    .link-container{
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 20px;
        .product{
            height: 300px;
            background-color: rgb(245, 238, 239);
            padding: 20px;
            text-decoration: none;
            img{
                width: 100%;
            }
            span{
                display: block;
                margin: 20px;
                text-align: center;
            }
        }

    }  
}
// @media screen and (max-width: 992px){
//     .link-container{
//         display: grid;
//         grid-template-columns: minmax(2,1fr);
//         grid-gap: 20px;
//         .product{
//             height: 200px;
//             background-color: pink;
//             padding: 20px;
//             text-decoration: none;
//             img{
//                 width: 100%;
//             }
//             span{
//                 display: block;
//                 margin: 20px;
//                 text-align: center;
//             }
//         }

//     }   
// }



</style>