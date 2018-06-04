<template>
<mu-paper>
    <mu-appbar color="primary">
      <mu-button icon slot="left" @click="goback()">
        <mu-icon  :size='40'  value="keyboard_arrow_left" ></mu-icon>
      </mu-button>
      {{title}}
    </mu-appbar>
    <mu-flex direction='column'>
      <div class="carousel" :style="carouselHeight">
          <carousel-image :carousels="carousels"></carousel-image>
      </div>
      <div  class="features">
        <home-features :homeFeatures='homeFeatures' v-on:open-feature='openFeature'></home-features>
      </div>

    </mu-flex>
</mu-paper>
</template>
<script>
import CarouselImage from "../components/CarouselImage.vue";
import HomeFeatures from "../components/HomeFeatures.vue";
import { mapGetters, mapActions } from "vuex";
import mixin from "../App";
export default {
  name: "home",
  mixins:[mixin],
  data() {
    return {
      title:"首页"
    };
  },
  created() {
    console.log("");
    this.fetchCarousels();
    this.fetchHomeFeatures();
  },
  mounted(){
     
  },
  methods: {
    ...mapActions(["fetchCarousels", "fetchHomeFeatures"]),
    openFeature(route) {
      console.log(route);
      this.$router.push(route);
    },
    
  },
  computed: {
    innerHeight() {
      return window.innerHeight;
    },
    carouselHeight() {
      return { height: Math.floor(window.innerHeight * 0.3) + "px" };
    },
    ...mapGetters({
      carousels: "getCarousels",
      homeFeatures: "getFeatures"
    })
  },
  components: {
    CarouselImage,
    HomeFeatures
  }
};
</script>
<style lang='scss' scoped>
.carousel {
  height: 100%;
  width: 100%;
}
.features {
  flex: 1;
  width: 100%;
}
</style>
