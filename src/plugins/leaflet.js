import Vue from 'vue';
import {
  LMap,
  LControlLayers,
  LTileLayer,
  LMarker,
  LTooltip,
  LPopup,
} from 'vue2-leaflet';
import LMarkerCluster from 'vue2-leaflet-markercluster';
import 'leaflet-plugins/layer/tile/Yandex';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

export default () => {
  Vue.component('l-map', LMap);
  Vue.component('l-control-layers', LControlLayers);
  Vue.component('l-tile-layer', LTileLayer);
  Vue.component('l-marker', LMarker);
  Vue.component('l-marker-cluster', LMarkerCluster);
  Vue.component('l-tooltip', LTooltip);
  Vue.component('l-popup', LPopup);
};
