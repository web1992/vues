import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import { router } from './router';
import iView from 'iview';
import "iview/dist/styles/iview.css";
import VueAwesomeSwiper from 'vue-awesome-swiper';
// require styles
import 'swiper/dist/css/swiper.css';
Vue.use(Vant);
Vue.use(VueAwesomeSwiper);
Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
