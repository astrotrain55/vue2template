import Vue from 'vue';
import Vuex from 'vuex';
import map from './map/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    map,
  },
});
