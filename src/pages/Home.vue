<template>
    <div class="carousel" :style="carouselHeight">
        <carousel-image></carousel-image>
    </div>
</template>
<script>
import CarouselImage from "../components/CarouselImage.vue";
export default {
  name: "home",
  data() {
    return {
      home: "首页",
    };
  },
  created() {},
  computed: {
    carouselHeight(){
      return {height:Math.floor(window.innerHeight*0.4)+"px"};
    }
  },
  components:{
    CarouselImage
  }
};
</script>
<style lang='scss' scoped>
  .carousel{
    height: 100%;
    width: 100%;
  }
</style>
