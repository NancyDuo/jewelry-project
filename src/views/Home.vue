<template>
  <div class="home">
    <main class="container__main">
      <!-- slider -->
      <Slider v-model="sliderValue" :duration="4000" :speed="2000" height='500px'>
        <SliderItem v-for="(l, index) in list" :key="index">
          <img class="sliImg" :src="l" />
        </SliderItem>
      </Slider>

      <!-- collection part -->
      <div class="collection">
        <Collection />
      </div>

      <!-- signiture part -->
      <div class="signiture">
        <Signiture />
      </div>

      <!-- Bestpoke -->
      <div class="bestpoke">
        <Bestpoke />
      </div>

      <!-- About me -->
      <div class="about">
        <AboutMe />
      </div>
    </main>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
import Collection from "@/components/Collection.vue";
import Signiture from "@/components/Signiture.vue";
import AboutMe from "@/components/AboutMe.vue";
import Bestpoke from "@/components/Bestpoke.vue";
import pic1 from "../assets/zuopin/1.png";
import pic2 from "../assets/zuopin/2.png";
import pic3 from "../assets/zuopin/6.png";
import pic4 from "../assets/zuopin/4.png";

export default {
  name: "Home",
  components: {
    Slider,
    SliderItem,
    Collection,
    Signiture,
    AboutMe,
    Bestpoke,
  },
  data() {
    return {
      list: [pic1, pic2, pic3, pic4],
      sliderValue: 1,
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  margin: 0;
  padding: 0;
  .slider {
    width: 100%;

    .slider-item {
      width: 100%;

      text-align: center;
    }
    .sliImg {
      height: 100%;
    }
  }
}
</style>
