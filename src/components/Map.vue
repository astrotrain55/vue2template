<template>
  <l-map
    v-if="showMap"
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    style="height: calc(100vh - 200px);"
  >
    <l-tile-layer
      :url="url"
      :attribution="attribution"
    />
  </l-map>
</template>

<script>
import { latLng } from 'leaflet';

export default {
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
};
</script>
