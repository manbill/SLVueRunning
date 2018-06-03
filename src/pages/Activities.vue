<template>
  
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "activities",
  data() {
    return {};
  },
  created() {},
  methods: {
    ...mapActions(["setAppBarTitle"])
  },
  mounted() {
    this.setAppBarTitle({ title: "活动" });
  }
};
</script>
<style lang="scss" scoped>
</style>
