<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
        </div>
      </router-link>
      <v-spacer/>
      <v-btn
        href="http://leaflet.github.io/Leaflet.Editable/doc/api.html"
        target="_blank"
        text>
        <span class="mr-2">Leaflet.Editable</span>
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
      <v-btn
        href="https://vue2-leaflet.netlify.com/components/"
        target="_blank"
        text>
        <span class="mr-2">vue2-leaflet</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <router-link to="/map">
        <v-btn text>
          <span class="mr-2">MAP</span>
          <v-icon>mdi-map</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <Templates/>
  </v-app>
</template>

<script>
import Templates from '@/components/templates';

export default {
  components: {
    Templates,
  },
};
</script>
