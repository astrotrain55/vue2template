import Vue from 'vue';
import {
  LMap,
  LTileLayer,
  LMarker,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
// https://vue2-leaflet.netlify.com/

export default () => {
  Vue.component('l-map', LMap);
  Vue.component('l-tile-layer', LTileLayer);
  Vue.component('l-marker', LMarker);
};
