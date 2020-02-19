import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from './plugins/axios';
import vuetify from './plugins/vuetify';
import leaflet from './plugins/leaflet';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
leaflet();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
