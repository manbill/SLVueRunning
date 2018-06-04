<template>
  <div id='app'>
    <transition name="slide-left" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const console = window.console;
export const mixin={
  methods:{
    goback(){
      if(this.$route.matched.length>1){
        this.$router.go(-1);
      }else{
        console.log(this.$route.matched.length);
        //直接回到首页
        this.$router.replace('/')
      }
    },
  }
}
export default {
  mixins:[mixin],
  name: 'app',
  components: {
  },
  data(){
    return {
    }
  },
  mounted(){
  },
  methods:{
  },
  computed:{
  }
}
</script>

<style lang='scss'>
  .mu-appbar{
    position: sticky;
    top: 0;
    height: 56px;
  }
</style>
