<template>
  <!-- <div class="wrapper">
      <router-link class="wider" to=''>
          <img :src=pic alt="">
      </router-link>
      <router-link class="thin1" to=''>
          <img :src=pic alt="">
      </router-link>
      <router-link class="thin2" to=''>
          <img :src=pic alt="">
      </router-link>
      <router-link class="thin3" to=''>
          <img :src=pic alt="">
      </router-link>
      <router-link class="thin4" to=''>
          <img :src=pic alt="">
      </router-link>
  </div> -->
<div class="wrapper">
    <div class="description">
        Tell us your story, we design and make it true together.
    </div>
    <button class="btn">Discover More</button>
</div>
</template>

<script>
import write from '../assets/slider-photo/write.jpeg'
export default {
    name:'Jewelry',
    data() {
        return {
            pic:write,
        }
    },

}
</script>

<style lang = 'less' scoped>
/* .wrapper{
    margin-top: 50px;
    width: 100%;
    height: 400px;
    background-color: pink;
    display: grid;
    grid-template-areas:
    'wider wider thin1 thin2'
    'wider wider thin3 thin4';
    grid-gap: 10px;
    grid-template-columns:repeat(4,1fr) ;
    text-align: center;
        img{
            width: 50%;
        }
    .wider{
        grid-area: wider;
        background-color: red;
        text-align: center;   

    }
    .thin1{
        grid-area: thin1;
        background-color: #fff;
        img{
            width: 50%;
        }
    }
    .thin2{
        grid-area: thin2;
        background-color: grey;
    }
    .thin3{
        grid-area: thin3;
        background-color: rgb(156, 43, 43);
    }
    .thin4{
        grid-area: thin4;
        background-color: rgb(129, 67, 67);
    }
}
@media screen and (max-width: 992px){
    .wrapper{
    height: 300px;
    width: 100%;
    grid-template-columns:1fr 1fr;
    grid-template-areas:
    'thin1 .'
    '. thin2'
    'thin3 .'
    'thin4 .';

    img{
        width: 50%;
        }
    }
   /* .thin2{
        grid-area: thin2;
        background-color: grey;
    }
    .thin3{
        grid-area: thin3;
        background-color: rgb(156, 43, 43);
    }
    .thin4{
        grid-area: thin4;
    }       
     

} */
.wrapper{
    width: 100%;
    height: 600px;
    background-image: url('../assets/slider-photo/write.jpeg');
    background-size: cover;
    position: relative;

    .description{
        position: absolute;
        left: 20%;
        top:20%;
    }
    .btn{
        position: relative;
        left: 20%;
        top:35%;
    }

}


</style>