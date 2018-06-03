<template>
<div>
    <mu-flex direction='column'>
      <div class="carousel" :style="carouselHeight">
          <carousel-image :carousels="carousels"></carousel-image>
      </div>
      <div  class="features">
        <home-features :homeFeatures='homeFeatures'></home-features>
      </div>
    </mu-flex>
</div>
</template>
<script>
import CarouselImage from "../components/CarouselImage.vue";
import HomeFeatures from "../components/HomeFeatures.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      home: "首页"
    };
  },
  created() {
    this.fetchCarousels();
    this.fetchHomeFeatures();
  },
  methods: {
    ...mapActions([
      "fetchCarousels",
      "fetchHomeFeatures",
      ])
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
      homeFeatures:"getFeatures"
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
