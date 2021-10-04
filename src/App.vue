<template>
  <div id="app">
      <Top/>
      <router-view></router-view>
      <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Top from '@/components/Top.vue'
export default {
  name:'App',
  components:{
    Footer,
    Top
  }
  
}
</script>

