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
      <latest-info :latesInfo='latestInfos'></latest-info>
    </mu-flex>
</mu-paper>
</template>
<script>
import CarouselImage from "../components/CarouselImage.vue";
import HomeFeatures from "../components/HomeFeatures.vue";
import LatestInfo from "../components/LatestInfo.vue";
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
    this.getMoreTeamData();
    this.getMoreActivitesData();
  },
  mounted(){
     
  },
  methods: {
    ...mapActions(["fetchCarousels", "fetchHomeFeatures",'getMoreActivitesData','getMoreTeamData']),
    openFeature(route) {
      console.log(route);
      this.$router.push(route);
    },
    arraySlice(array,num){
      let min = Math.floor(array.length*Math.random());
      if(min+num>=array.length){//如果取的值超过数组长度
        min = Math.max(array.length-num,0);
      }
      let max = min+num;
      return {
        min,
        max
      }
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
      homeFeatures: "getFeatures",
      activities:"getActivites",
      teams:"teams"
    }),
    latesTeams(){
      console.log(this.teams);
      const minMax = this.arraySlice(this.teams,5);
      console.log(minMax);
      return {
          title:"我的团队",
          icon:"menu",
          items:this.teams.slice(minMax.min,5)
      }
    },
    latestActivities(){
      const minMax = this.arraySlice(this.activities,5);
      console.log(minMax);
      
      return {
          title:"最新活动",
          icon:"info",
          items:this.activities.slice(minMax.min,5)
        }
    },
    latestInfos(){
      console.log(this.latesTeams,this.latestActivities);
      return [
        this.latesTeams,
        this.latestActivities
      ]
    }
  },
  components: {
    CarouselImage,
    HomeFeatures,
    LatestInfo
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
