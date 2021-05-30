<template>
    <v-app>
      <header>
        <v-app-bar color="rgba(0, 0, 0, 0)" flat floating fixed>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar> 
        <v-navigation-drawer
          v-model="drawer"
          color="rgba(0, 0, 0, 0)"
          floating
          fixed
          hide-overlay
          style="margin-top: 60px; margin-left: 10px;"
        >
          <v-list
            nav
            dense
          >
            <v-list-item-group>
              <v-list-item to="/">
                <v-list-item-title>Top</v-list-item-title>
              </v-list-item>
              <v-list-item to="/detail">
                <v-list-item-title>詳細</v-list-item-title>
              </v-list-item>
              <v-list-item to="/susume">
                <v-list-item-title>バイクのすゝめ</v-list-item-title>
              </v-list-item>
              <v-list-item to="/link">
                <v-list-item-title>外部リンク</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </header>
    </v-app>
</template>

<script>
import vuetify from '../plugins/vuetify'
export default {
  name: 'App',
  vuetify,
  data: () => ({
    drawer: 'null' 
  }),
  methods: {
  }
}
</script>


