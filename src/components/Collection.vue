<template>
    <div class="wrapper">
        <div class="title">Collection</div>
        <div class="category-wrapper">
            <div class="showCate" 
                v-for = '(c,index) in categories' 
                :key= 'index'>   
                <img :src = "c.img">
                <div class="showName">{{c.title}}</div>
            </div>            
        </div>

    </div>
</template>
<script>
import leaf from '../assets/leaf-ring/1.png'
import letter from '../assets/letter-ring/1.png'
import double from '../assets/double-circle/1.png'
import tenon from '../assets/tenon.png'
export default {
    name:'Collection',
    data() {
        return {
            categories:[{title:'LEAF',img:leaf},
                {title:'LETTER',img:letter},
                {title:'DOUBLE',img:double},
                {title:'TENON',img:tenon}],   
        }
    },
          
}
</script>

<style lang='less' scoped>
.wrapper{
    width: 100%;
    margin: 20px 0;
    .title{
        text-align: center;
        margin: 10px;
        font-size: 20px;   
    }
    .category-wrapper{
        display: flex;
        justify-content: space-between;
        flex: wrap; 
        .showCate{
            margin: 20px;
            width: 25%;
            text-align: center;
            img{
               width: 100%;  
            }
            .showName{
                margin: 10px auto;
                width: 80%;
                color: rgb(97, 96, 96);
                border:1px solid rgb(158, 155, 155)
            }
        }
    }

}
@media screen and (max-width: 992px){
    .wrapper{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;      
        .category-wrapper{
            display: flex;
            flex-direction: column;              
            width: 100%;
           // justify-content: center; 
            .showCate{
                width: 100%;
                display: flex;
                flex-direction: column; 
                text-align: center;
                align-items: center;
                img{
                    width: 500px;
                }
                .showName{
                    margin: 10px auto;
                    width: 40%;
                    color: rgb(97, 96, 96);
                    border:1px solid rgb(158, 155, 155)
                }
            }
        }    
    }  
    
}
</style>