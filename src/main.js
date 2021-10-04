import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
import EasySlider from 'vue-easy-slider'
import VueLazyload from 'vue-lazyload'
import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);


Vue.use(VueLazyload)
Vue.use(EasySlider)
// Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
