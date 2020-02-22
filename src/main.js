import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import L from '@/plugins/leaflet';
import App from '@/App.vue';

Vue.config.productionTip = false;
Vue.use(L);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
