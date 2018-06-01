<template>
  <div id='app'>
    <mu-appbar color="primary" v-if='appBar.height'>
          <mu-button icon slot="left">
            <mu-icon value="keyboard_arrow_left" @click="goback(-1)"></mu-icon>
          </mu-button>
          Photo
    </mu-appbar>
    <router-view></router-view>
</div>
</template>

<script>
import Home from './components/Home.vue'
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: 'app',
  components: {
    Home
  },
  data(){
    return {
    }
  },
  methods:{
    goback(n){
      this.$route.goback(n);
    },
    
  },
  computed:{
    ...mapGetters(['appBar'])
  }
}
</script>

<style scoped>
  .mu-appbar{
    position: sticky;
    top:0;
    height: 56px;
  }
</style>
