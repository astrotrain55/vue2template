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
      :key="tileProvider.name"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      layer-type="base"/>
    <l-marker-cluster>
      <l-marker
        v-for="marker in markers"
        :key="marker.coords.join('.')"
        :lat-lng="marker.coords"
        :icon="marker.icon">
        <l-popup>{{ marker.popup }}</l-popup>
        <l-tooltip>{{ marker.tooltip }}</l-tooltip>
      </l-marker>
    </l-marker-cluster>
  </l-map>
</template>

<script>
import trim from 'lodash/trim';
import map from 'lodash/map';
import template from 'lodash/template';
import test from '@/api/test.json';

const _ = {
  trim,
  map,
  template,
};

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
      console.log(this.cables);
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
        visible: true,
      },
    ],
  }),

  computed: {
    markers() {
      return _.map(test.boxes, (box) => ({
        coords: [Number(box.UF_LAT), Number(box.UF_LNG)],
        icon: L.divIcon({ // eslint-disable-line
          html: tpl({
            id: box.UF_XML_ID,
            address: box.UF_ADDRESS,
            azimuth: box.UF_ROTATE || 0,
            number: box.UF_BOX_NUMBER || box.UF_ADDRESS,
            cross: !box.UF_CROSS ? false : 'no-cross',
          }, 'box'),
        }),
        tooltip: box.UF_ADDRESS,
        popup: `
          Ящик: ${box.UF_BOX_NUMBER}.
          Адрес: ${box.UF_ADDRESS}.`,
      }));
    },

    cables() {
      return _.map(test.cables, (cable) => cable);
    },
  },

  methods: {
    readyLayers(layers) {
      layers.addBaseLayer(L.yandex(), 'Yandex'); // eslint-disable-line
    },
  },
};
</script>
