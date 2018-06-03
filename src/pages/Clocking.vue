<template>
  
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "clocking",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setAppBarTitle"])
  },
  mounted() {
    this.setAppBarTitle({ title: "打卡" });
  },
  created() {}
};
</script>
<style lang="scss" scoped>
</style>
