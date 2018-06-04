<template>
  <mu-appbar color="primary">
      <mu-button icon slot="left" @click="goback()">
        <mu-icon  :size='40'  value="keyboard_arrow_left" ></mu-icon>
      </mu-button>
      {{title}}
    </mu-appbar>
</template>
<script>
import { mapActions } from "vuex";
import mixin from "../App";
export default {
  mixins:[mixin],
  name: "clocking",
  data() {
    return {
      title:"打卡"
    };
  },
  methods: {
  },
  mounted() {
  },
  created() {}
};
</script>
<style lang="scss" scoped>
</style>
