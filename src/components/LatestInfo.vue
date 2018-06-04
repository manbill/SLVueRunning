<template>
  <mu-paper :z-depth='1'>
    <mu-list toggle-nested>
      <mu-list-item button='' :ripple="false" nested :open='arguments[0]===index' @toggle-nested="open=arguments[0]?index:''" v-for='(info,index) of latesInfo||3' :key='index'>
        <mu-list-item-action>
          <mu-icon value="comment"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>
          {{info.title}}
        </mu-list-item-title>
        <mu-list-item-action>
          <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
        </mu-list-item-action>
        <mu-list-item button :ripple="false" slot="nested" v-for="(item,i) of info.items||10" :key="i">
          <mu-list-item-title >{{item}}</mu-list-item-title>
        </mu-list-item>
      </mu-list-item>
    </mu-list>
  </mu-paper>
</template>
<script>
  export default {
    props:{
      latesInfo:{
        type:null,
        default:()=>{}
      }
    },
    data(){
      return {

      }
    },
    mounted(){
      console.log(this.latesInfo)

    },
    created(){
    }
  }
</script>
<style lang="scss" scoped>
  .mu-paper{
    width: 100%;
  }
</style>
