<template>
  <v-container class="fill-height pa-0" fluid>
    <leaflet/>
  </v-container>
</template>

<script>
import leaflet from '@/components/Map';

export default {
  components: {
    leaflet,
  },
};
</script>
