<template>
  <div class="top-wrapper">
    <!-- mini menu icon-->
    <div class="open-icon" @click= "openMiniMenu" v-show="!miniMenuShow">
        <div id = "up" class="memu"></div>
        <div id='middle' class="memu"></div>        
        <div id="bottom" class="memu"></div>
    </div>
    <!-- mini menu content -->
    <div class="mini-menu" v-show = 'miniMenuShow'>
        <div class="close-icon" @click = "closeMiniMenu">
            <div></div><div></div>
        </div>
        <div class="link-wrapper">
          <router-link to="/home/signiture">SIGNITURE</router-link>
          <router-link to='/home/collection'>COLLECTION</router-link>
          <router-link to='/home/bestpoke'>BESTPOKE</router-link>
          <router-link to='/home/earing'>EARINGS</router-link>
          <router-link to='/home/ring'>RINGS</router-link>
          <router-link to='/home/necklace'>NECKLACES</router-link>
        </div>
    </div> 

    <!-- logo -->
    <div class="logo">
        <router-link to="/home">
        <img src= "../assets/Logo-Slogan.png">
        </router-link>
        
    </div>

    <!-- main menu -->
    <div class="top-bar" >
        <div class="link-wrapper">
          <router-link to="/home/signiture">SIGNITURE</router-link>
          <router-link to='/home/collection'
          @mouseenter.native = "enter" @mouseleave.native = "leave"
          >COLLECTION</router-link>
          <router-link to='/home/bestpoke'>BESTPOKE</router-link>
          <router-link to='/home/earing'>EARINGS</router-link>
          <router-link to='/home/ring'>RINGS</router-link>
          <router-link to='/home/necklace'>NECKLACES</router-link>
        </div>

        <!-- hover effect on menu -->
        <div class="hoverEff" v-show="hoverHid"
            @mouseenter = "enter" 
            @mouseleave = "leave"
        >
            <div class="left-wrapper">
                <div class="collectionList"  
                    v-for = '(cl,index) in collectionList'
                    @mouseenter = "enterList(index)" 
                    @mouseleave = "leaveList" 
                    :key = 'index'
                >
                    <router-link to='/home' >{{cl.collectionName}}</router-link>               
                    </div>
                </div>
                <!-- image in hover effect -->
                <div class="imgBox">
                    <img :src=showHoverImage >
                 </div> 
            </div>  
    </div>           
    </div>

</template>

<script>
import Leaf from '../assets/leaf-ring/1.png'
import Letter from '../assets/letter-ring/1.png'
import Double from '../assets/double-circle/1.png'
import Denon from '../assets/tenon.png'
export default {
    name:'Top',
    data() {
        return {
            hoverHid:false,
            showHoverImage:'',
            miniMenuShow:false,
          collectionList:[
            {collectionName:'Leaf'},
            {collectionName:'Double'},
            {collectionName:'Letter'},
            {collectionName:'Denon'}]
        }
    },
    methods: {
        enter(){
            this.hoverHid=true
        },
        leave(){
            this.hoverHid=false
        },
        enterList(n){
            if(n=='0'){
                this.showHoverImage = Leaf
            }else if(n=='1'){
                this.showHoverImage = Double
            }else if(n=='2'){
                this.showHoverImage = Letter
            }else if(n=='3'){
                this.showHoverImage = Denon
            }
        },
        leaveList(){
           this.showHoverImage = ''
        },
        openMiniMenu(){
            this.miniMenuShow = true
        },
        closeMiniMenu(){
            this.miniMenuShow = false
        }
    },
}
</script>

<style lang='less' scoped>
.top-wrapper{
    width: 100%;
    height: 150px;
    .logo{
    margin-top: 20px;
    text-align: center;
    margin-left: 0px;
    img{
        width: 200px;
    }
}
.top-bar{
    width: 90%;
    margin: 40px auto;
    text-align: center;
    font-size: 15px;
    line-height: 100%;
    .link-wrapper{
        width: 100%;
        display: flex;
        justify-content: space-around;
        a{
        text-decoration: none;
        color: rgb(65, 63, 63);
        margin-right: 10px;
        height: 100%;
        text-align: center;
        }
    } 
    .hoverEff{
        position: absolute;
        padding: 50px 130px;
        left:0px;
        top: 145px;
        z-index: 1000;
        width: 100%;
        height: 300px;
        background-color:white;
        .left-wrapper{
            height: 90%;
            width: 30%;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap ;
            justify-content: start;
            align-items: flex-start;
            .collectionList{
                font-size:20px;
                line-height: 100%;
                margin: 20px;
                a{
                    text-decoration: none;
                    color: rgb(94, 92, 92);
                }
            }
        }
        .collectionList:hover{
            opacity: 50%;
        }
        .imgBox{
            width: 35%;
            height: 70%;
            position:absolute;
            left: 40%;
            top:40px;
            img{
                width: 80%;
                position: absolute;
                }
            }  
        }       
    }
}

@media screen and (max-width: 992px){
        .open-icon{
            position: absolute;
            top:80px;
            height: 30px;
            width: 25px;
            div{
            position: relative; 
            border-bottom: 1px solid black;
            }   
            #middle{
                top:10px;
            }
            #bottom{
                top: 20px;
            }
        }
        .open-icon:hover{
            opacity: 40%;
        }
        .mini-menu{
            position: absolute;
            z-index: 500;
            width: 100%;
            height: 400px;
            padding: 0px;
            background:white;
            top:80px;
            display: flex;
            flex-direction: column;
            .close-icon{    
                width: 30px;
                height: 30px;
                display:block;
                margin-bottom: 20px;
                div{
                    border: 1px solid black;
                    margin-bottom: 10px;    
                }
                :first-child{
                  transform: rotate(23deg);
                  transform-origin: 0;  
                }
                :last-child{
                transform: rotate(-23deg);
                transform-origin: 0; 
                }
            }
            .close-icon:hover{
                opacity: 30%;
            }
            .link-wrapper{
                display: flex;
                flex-direction: column;
                margin-top:20px;
                padding:0px;
                a{
                    margin: 10px 0;
                    padding: 0px;
                    display: block;
                    text-decoration: none;
                    color: rgb(104, 100, 100);
                    border-bottom: 1px solid black;
                }
                a:hover{
                    color: rgb(196, 189, 189);
                }
            }
        }
        .top-bar{
            display: none;
        }            
}

</style>