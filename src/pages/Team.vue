<template>
  <mu-paper :z-depth="1">
      <mu-appbar color="primary">
      <mu-button icon slot="left" @click="goback()">
        <mu-icon  :size='40'  value="keyboard_arrow_left" ></mu-icon>
      </mu-button>
      {{title}}
       <mu-button icon slot="right" @click="search()">
        <mu-icon :size='30' value="search" ></mu-icon>
      </mu-button>
    </mu-appbar>
      <mu-tabs :value.sync="active2" color="primary" indicator-color="yellow" full-width>
        <mu-tab>我的团队</mu-tab>
        <mu-tab>所有团队</mu-tab>
      </mu-tabs>
      <mu-list textline="three-line" :dense='true'>
        <mu-sub-header inset>团队列表</mu-sub-header>
          <feature-item v-for="(team,index) of teams" :item='team' :key='index'></feature-item>
        </mu-list>
  </mu-paper>

</template>
<script>
import { mapActions, mapGetters } from "vuex";
import FeatureItem from '../components/FeatureItem';
import mixin from '../App';
export default {
  mixins:[mixin],
  name: "team",
  components: {
    FeatureItem
  },
  data() {
    return {
      active2: 0,
      title:"团队"
    };
  },
  created() {
    console.log("created");
    console.log(mixin);
    // console.log(this.$route);
    // console.log(this.$router);
  },
  mounted(e) {
    console.log("mounted");
    // console.log('mounted',this.setAppBarTitle);
    this.getMoreTeamData({
      currentPage: 1
    });
  },
  updated() {
    console.log("updated");
  },
  beforeUpdate() {
    console.log("before update");
  },
  methods: {
    ...mapActions(["getMoreTeamData"]),
    search(){

    }
  },
  computed: {
    ...mapGetters(["teams"])
  }
};
</script>
<style lang="scss" scoped>
  .mu-tabs{
    position: sticky;
    top: 56px;
  }
</style>
