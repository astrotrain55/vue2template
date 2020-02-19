import Vue from 'vue';
import vuetify from './plugins/vuetify';
import leaflet from './plugins/leaflet';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;
leaflet();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
