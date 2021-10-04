<template>
  <div class="wrapper">
    <div class="top">
      <div class="img-wrapper">
          <div class="left-arrow">
          </div>
        <div style="width: 600px" class="img">
          <zoom-on-hover :img-normal="pic">
          </zoom-on-hover>
        </div>
        <div class="right-arrow">
        </div>
      </div>

      <div class="description">
          <div>
              This is a description
          </div>
          <div>
              I am price
          </div>
      </div>
    </div>
    <!-- <div class="recomondation"></div> -->
  </div>
</template>

<script>
import pic1 from "../assets/zuopin/1.png";
export default {
  name: "Product",
  data() {
    return {
      pic: pic1,
    };
  },
};
</script>

<style lang='less' scoped>
.wrapper {
  margin: 20px 0;
  height: 500px;
  width: 100%;
  .top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }
  .img-wrapper {
    height: 100%;
    .img{
        margin-left: 50%;
        height: 100%;
        transform: translateX(-50%);   
        background-color: rgb(218, 210, 210);     
    }
  }
  .description {
    text-align: center;
    padding: 10%;
  }
}
</style>