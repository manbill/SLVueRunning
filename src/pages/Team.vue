<template>
  
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "team",
  components: {},
  data() {
    return {};
  },
  created() {
    console.log("created");
    console.log(this.$route);
    console.log(this.$router);
  },
  mounted(e) {
    console.log('mounted')
    this.setAppBarTitle({ title: "团队" });
    // console.log('mounted',this.setAppBarTitle);
  },
  updated() {
    console.log("updated");
  },
  beforeUpdate() {
    console.log("before update");
  },
  methods: {
    ...mapActions(["setAppBarTitle"])
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
</style>
