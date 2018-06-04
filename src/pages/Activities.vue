<template>
<mu-paper>
  <mu-appbar color="primary">
      <mu-button icon slot="left" @click="goback()">
        <mu-icon  :size='40'  value="keyboard_arrow_left" ></mu-icon>
      </mu-button>
      {{title}}
    </mu-appbar>
    <mu-tabs :value.sync="active2" color="primary" indicator-color="green" full-width>
        <mu-tab>我的活动</mu-tab>
        <mu-tab>所有活动</mu-tab>
    </mu-tabs>
    <mu-list textline="three-line" :dense='true'>
      <mu-sub-header inset>团队列表</mu-sub-header>
      <feature-item v-for="(activitie,index) of activities" :item='activitie' :key='index'></feature-item>
    </mu-list>
</mu-paper>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import mixin from '../App';
import FeatureItem from "../components/FeatureItem";
export default {
  mixins:[mixin],
  name: "activities",
  data() {
    return {
      title:"活动",
      active2:0
    };
  },
  created() {},
  components:{
    FeatureItem
  },
  methods: {
    ...mapActions(['getMoreActivitesData'])
  },
  computed:{
    ...mapGetters({
      activities:"getActivites"
    })
  },
  mounted() {
    this.getMoreActivitesData();
  }
};
</script>
<style lang="scss" scoped>
  .mu-tabs{
    position: sticky;
    top: 56px;
  }
</style>
