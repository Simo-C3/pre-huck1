<template>
  <div>
    <div>
      <img src="../assets/ogp.jpg" style="width: 100%;"/>
    </div>
    <Scroll>
      <div style="margin-top: 5%; margin-bottom: 5%;">
        <div class="image">
          <div style="top: 20%; left: 20%; position: relative;">
            <h1 style="">みんなバイク乗ろうよ！！</h1>
          </div>
        </div>
      </div>
    </Scroll>
    <Scroll>
      <div class="card">
        <a href="/detail" @click.stop.prevent="goDetail" class="link" style="color: #000000; text-decoration: none;">
          <v-container class="con">
              <v-row class="home-about__contents">
                  <v-col md="6" class="home-about__contents-img">
                      <img src="../assets/car_syoshinsya_mark.png" alt="" class="img-fluid">
                  </v-col>
                  <v-col md="6" class="home-about__contents-text">
                      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                  </v-col>
              </v-row>
          </v-container>
        </a>
      </div>
    </Scroll>
    <Scroll>
      <div class="card">
        <a href="/susume" @click.stop.prevent="goSusume" class="link" style="color: #000000; text-decoration: none;">
          <v-container class="con">
              <v-row class="home-about__contents">
                  <v-col md="6" class="home-about__contents-img">
                      <img src="../assets/car_syoshinsya_mark.png" alt="" class="img-fluid">
                  </v-col>
                  <v-col md="6" class="home-about__contents-text">
                      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                  </v-col>
              </v-row>
          </v-container>
        </a>
      </div>
    </Scroll>
    <Scroll>
      <div class="card">
        <a href="/link" @click.stop.prevent="goLink" class="link" style="color: #000000; text-decoration: none;">
          <v-container class="con">
              <v-row class="home-about__contents">
                  <v-col md="6" class="home-about__contents-img">
                      <img src="../assets/car_syoshinsya_mark.png" alt="" class="img-fluid">
                  </v-col>
                  <v-col md="6" class="home-about__contents-text">
                      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                  </v-col>
              </v-row>
          </v-container>
        </a>
      </div>
    </Scroll>
  </div>
</template>

<script>
import vuetify from '../plugins/vuetify';
import Scroll from './Scroll';
export default {
  name: 'home',
  vuetify,
  components: {
    Scroll,
  },
  data: () => ({
    return: {
      compSelect: '/'
    }
  }),
  methods: {
    goDetail() {
      this.$router.push({path:'detail'});
    },
    goSusume() {
      this.$router.push({path:'susume'});
    },
    goLink() {
      this.$router.push({path:'link'});
    },
  }
}
</script>


<style>
.image {
  background-image: url(../assets/bike_american_choppers_.png);
  background-position: 90%;
  height: 100vh;
}
.item {
  height: 100%;
}
.item1 {
  position: relative;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 20%;
  margin-bottom: 5%;
  width: 50%;
  border: 1px solid;
  border-color: rgb(230, 230, 230);
}
.item1-1, .item1-2 {
  display: inline-block;
}
.item1-2 {
  position: relative;
  left: 20%;
  bottom: 200px;
}
.home-about__contents {
  display: block;
  margin-top: 20px;
  border: 1px solid;
  border-color: rgb(230, 230, 230);
  width: 100%;
  margin-right: 0;
  margin-left: 25%;
}
.home-about__contents-img {
  position: relative;
  text-align: center;
}
.home-about__contents-text {
  position: relative;
  word-wrap: break-word;
}
.v-card.on-hover.theme--dark{
  background-color: rgba(#FFF, 0.8)
}
.con {
  width: 50%;
}
.card {
  width: 100%;
}
.link {
  display: block;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 40%;
  margin-bottom: 15%;
}
</style>