<template>
  <l-map
    ref="map"
    :zoom="zoom"
    :center="center"
    :options="mapOptions">
    <l-control-layers
      position="topright"
      @ready="readyLayers"/>
    <l-tile-layer
      v-for="tileProvider in tileProviders"
      :key="tileProvider.url"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      layer-type="base"/>
    <l-marker-cluster>
      <l-marker
        v-for="marker in markers"
        :key="marker.coords.join('.')"
        :icon="marker.icon"
        :draggable="true"
        :lat-lng="marker.coords">
        <l-popup>{{ marker.popup }}</l-popup>
        <l-tooltip>{{ marker.tooltip }}</l-tooltip>
      </l-marker>
    </l-marker-cluster>
    <l-polyline
      v-for="(polyline, key) in polylines"
      :key="`${key}_${polyline.color}`"
      :lat-lngs="polyline.coords"
      :color="polyline.color"/>
  </l-map>
</template>

<script>
import test from '@/api/test.json';
import _ from '@/plugins/lodash';

function tpl(data, name) {
  const templates = document.querySelector('#templates');
  const el = templates.querySelector(`[title=${name}]`);
  const markup = _.trim(el.textContent);
  const compiled = _.template(markup);

  return compiled({ _, ...data });
}

export default {
  mounted() {
    this.$nextTick(() => {
      this.$refs.map.fitBounds(this.bounds);
    });
  },

  data: () => ({
    zoom: 16,
    center: [55.1699231, 61.4512017],
    mapOptions: {
      doubleClickZoom: false,
      zoomControl: false,
      attributionControl: false,
    },
    tileProviders: [
      {
        name: 'OSM',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        visible: false,
      },
      {
        name: 'OSM-HOT',
        url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        visible: false,
      },
      {
        name: 'OSM-INTL',
        url: 'http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
        visible: true,
      },
    ],
  }),

  computed: {
    markers() {
      return _.map(test.boxes, (box) => ({
        coords: [Number(box.UF_LAT), Number(box.UF_LNG)],
        icon: this.$L.divIcon({
          popupAnchor: [0, 0],
          html: tpl({
            id: box.UF_XML_ID,
            address: box.UF_ADDRESS,
            azimuth: box.UF_ROTATE || 0,
            number: box.UF_BOX_NUMBER || box.UF_ADDRESS,
            cross: !box.UF_CROSS ? false : 'no-cross',
          }, 'box'),
        }),
        tooltip: box.UF_ADDRESS,
        popup: `Ящик ${box.UF_BOX_NUMBER} (${box.UF_ADDRESS})`,
      }));
    },

    polylines() {
      // return _.map(test.cables, (cable) => ({
      //   color: '#167244',
      //   coords() {
      //     const coords = [];

      //     if (cable.UF_COORDS) {
      //       _.each(cable.UF_COORDS, (item) => {
      //         const bounds = _.split(item, ',');
      //         const lat = Number(_.trim(bounds[0]));
      //         const lng = Number(_.trim(bounds[1]));

      //         coords.push([lat, lng]);
      //       });
      //     }

      //     return coords;
      //   },
      // }));

      return _.map(test.cables, (cable) => cable);
    },

    bounds() {
      return this.markers.map((m) => m.coords);
    },
  },

  methods: {
    readyLayers(layers) {
      layers.addBaseLayer(this.$L.yandex(), 'Yandex');
    },
  },
};
</script>

<style lang="stylus">
.leaflet-fake-icon-image-2x
  background-image url('~leaflet/dist/images/marker-icon-2x.png')
.leaflet-fake-icon-shadow
  background-image url('~leaflet/dist/images/marker-shadow.png')
</style>
