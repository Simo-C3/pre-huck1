<template>
  <div>
    <v-app id="inspire">
      <v-app id="inspire">
        <v-container>
          <v-bottom-navigation
            :value="value"
            color="teal"
            grow
          >
            <v-btn>
              <span>Recents</span>

              <v-icon>mdi-history</v-icon>
            </v-btn>

            <v-btn>
              <span>Favorites</span>

              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn>
              <span>Nearby</span>

              <v-icon>mdi-map-marker</v-icon>
            </v-btn>
          </v-bottom-navigation>
        </v-container>
    
        <v-main>
          <component :is="currentView" style="transform: translate(10%, 10%);"></component>
        </v-main>
    
        <v-footer app>
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import Home from './components/HelloWorld';
import About from './components/About';
import vuetify from './plugins/vuetify'
export default {
  name: 'App',
  vuetify,
  components: {
    Home,
    About
  },
  data: () => ({
    currentView: 'Home' 
  }),
  methods: {
    view1() {
      this.currentView = "Home"
    },
    view2() {
      this.currentView = "About"
    }
  }
}
</script>
