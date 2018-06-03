<template>
  <div id='app'>
      <mu-appbar color="primary" v-if='appBar.height'>
            <mu-button icon slot="left" @click="goback()">
              <mu-icon  :size='40'  value="keyboard_arrow_left" ></mu-icon>
            </mu-button>
            {{appBar.title}}
      </mu-appbar>
      <div class='view'>
        <router-view></router-view>
      </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
const console = window.console;
export default {
  name: 'app',
  components: {
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

<style lang='scss' scoped>
  .mu-appbar{
    position: sticky;
    top: 0;
  }
</style>
