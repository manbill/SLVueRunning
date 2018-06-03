<template>
  <div id='app'>
      <mu-appbar color="primary" v-if='appBar.height'>
            <mu-button icon slot="left" @click="goback()" large>
              <mu-icon value="keyboard_arrow_left" ></mu-icon>
            </mu-button>
            {{appBar.title}}
      </mu-appbar>
      <div class='view'>
        <router-view></router-view>
      </div>
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
    goback(){
      if(this.$route.matched.length>1){
        this.$router.back();
      }else{
        console.log(this.$route.matched.length);
      }
    },
    
  },
  computed:{
    ...mapGetters(['appBar'])
  }
}
</script>

<style scoped>
  
</style>
