<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <router-link to="/">
          Home page
        </router-link>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <leaflet/>
      </v-col>
    </v-row>
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
