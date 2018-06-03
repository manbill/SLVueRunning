<template>
  <div id='app'>
      <mu-appbar color="primary" v-if='appBar.height'>
            <mu-button icon slot="left" @click="goback()">
              <mu-icon  :size='40'  value="keyboard_arrow_left" ></mu-icon>
            </mu-button>
            {{appBar.title}}
      </mu-appbar>
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
export default {
  name: 'app',
  components: {
  },
  data(){
    return {
    }
  },
  mounted(){
    this.setAppBarTitle({title:"首页"});
  },
  methods:{
    goback(){
      if(this.$route.matched.length>1){
        this.$router.go(-1);
      }else{
        console.log(this.$route.matched.length);
        var self = this;
        //直接回到首页
        this.$router.replace('/',()=>{
          self.setAppBarTitle({title:"首页"});
        })
      }
    },
    ...mapActions(['setAppBarTitle'])
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
