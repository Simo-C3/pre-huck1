<template>
    <a href="/detail" @click.stop.prevent="goDetail" style="color: #000000; text-decoration: none;">
        <v-container class="con">
            <v-row class="home-about__contents">
                <v-col md="5" class="home-about__contents-img">
                    <img src="../assets/car_syoshinsya_mark.png" alt="" class="img-fluid">
                </v-col>
                <v-col md="5" class="home-about__contents-text">
                    <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                    <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                </v-col>
            </v-row>
        </v-container>
    </a>
</template>

<script>
import vuetify from '../plugins/vuetify';
export default {
  name: 'home',
  vuetify,
  data: () => ({
    return: {
      compSelect: '/'
    }
  }),
  methods: {
    goDetail() {
      this.$router.push({path:'detail'});
    }
  }
}
</script>

<style>
.home-about__contents {

  border: 1px solid;
  border-color: rgb(230, 230, 230);

}
.home-about__contents-img {
  position: relative;
  text-align: center;
}
.home-about__contents-text {
  position: relative;
  word-wrap: break-word;
}

</style>