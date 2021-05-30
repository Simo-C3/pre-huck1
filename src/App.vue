<template>
  <div>
    <v-app id="inspire">
      <Header style="position: fixed; z-index: 100;"/>

      <v-main>
        <router-view></router-view>
      </v-main>
  
      <v-footer>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header';
import vuetify from './plugins/vuetify';
export default {
  name: 'App',
  vuetify,
  components: {
    Header,
  },
  data: () => ({

  }),
  methods: {

  },
}
</script>
