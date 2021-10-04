<template>
  <div class="wrapper">
    <div class="title">Signiture</div>
    <div class="signiture-wrapper">
      <router-link
        class="showSig"
        to="/home"
        v-for="(s, index) in sigCate"
        :key="index"
      >
        <img :src="s.img" />
        <div class="showName">{{ s.title }}</div>
      </router-link>
    </div>
    <!-- <div class="left-top item">

    </div>
    <div class="right-top item">
      <span>Discovery our Signiture</span>
      <button>Find More</button>
    </div>
    <div class="left-bottom item">
      <span>Discovery our Signiture</span>
      <button>Find More</button>
    </div>
    <div class="right-bottom item"></div> -->
  </div>
</template>
<script>
import pic1 from "../assets/zuopin/1.png";
import pic2 from "../assets/zuopin/2.png";
import pic3 from "../assets/zuopin/6.png";
import pic4 from "../assets/zuopin/4.png";
export default {
  name: "Signiture",
  data() {
    return {
      sigCate: [
        { title: "PIC1", img: pic1 },
        { title: "LETTER", img: pic2 },
        { title: "DOUBLE", img: pic3 },
        { title: "TENON", img: pic4 },
      ],
    };
  },
};
</script>

<style lang='less' scoped>
// .wrapper {
//   width: 100%;
//   height: 800px;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 400px 400px;

//   .left-top {
//     background-color: paleturquoise;
//     //background-image: url("../assets/tenon.png");
//   }
//   .right-top {
//     text-align: center;
//     padding: 20%;
//     span {
//       display: block;
//     }
//     button {
//       margin: 20px;
//     }
//   }
//   .left-bottom {
//     text-align: center;
//     padding: 20%;
//     span {
//       display: block;
//     }
//     button {
//       margin: 20px;
//     }
//   }
//   .right-bottom {
//     background-color: pink;
//     //background-image: url('../assets/slider-photo/write.jpeg');
//     background: cover;
//     background-repeat: no-repeat;
//   }
// }

.wrapper {
  width: 100%;
  margin: 20px 0;
  .title {
    text-align: center;
    font: 20px;
    font-size: 20px;
  }
  .signiture-wrapper {
    display: flex;
    justify-content: space-around;
    .showSig {
      background-color: rgb(235, 231, 231);
      margin: 20px;
      width: 25%;
      text-align: center;
      text-decoration: none;
      img {
        width: 100%;
      }
      .showName {
        margin: 10px auto;
        font-size: 20px;
        color: rgb(97, 96, 96);
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .signiture-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      .showSig {
        width: 400px;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        // img{
        //    // width: 400px;
        // }
        .showName {
          margin: 10px auto;
          width: 40%;
          color: rgb(97, 96, 96);
        }
      }
    }
  }
}
</style>