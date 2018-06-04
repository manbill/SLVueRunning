<template>
  <mu-paper>
    <mu-appbar color="primary">
      <mu-button icon slot="left" @click="goback()">
        <mu-icon  :size='40'  value="keyboard_arrow_left" ></mu-icon>
      </mu-button>
      {{title}}
    </mu-appbar>
</mu-paper>
</template>
<script>
  import mixin from "../App";
  export default {
    mixins:[mixin],
    data(){
      return {
        title:"比赛"
      }
    }
  }
</script>