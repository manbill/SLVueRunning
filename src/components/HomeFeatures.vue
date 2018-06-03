<template>
  <mu-paper :z-depth="0">
    <mu-row v-for='(index) of rows' :key='index' :gutter='true'>
      <mu-col v-for="(ft,i) of colsOfRow(index-1)" :key='i' :order='ft.order'>
        <mu-flex direction='column' align-items='center'>
          <mu-button icon  fill fab>
            <mu-icon :value='ft.icon' :size='30'></mu-icon>
          </mu-button>
          <p>{{ft.title}}</p>
        </mu-flex>
      </mu-col>
    </mu-row>
  </mu-paper>
</template>
<script>
export default {
  props: {
    homeFeatures:{
      type:Array,
      default:()=>[]
    },
    cols:{
      type:Number,
      default:3
    }
  },
  data() {
    return {};
  },
  created() {},
  methods:{
    colsOfRow(row){
      console.log(row,this.features.slice(this.cols*row,this.cols*(row+1)));
      return this.features.slice(this.cols*row,this.cols*(row+1));
    }
  },
  computed: {
    features() {
      return this.homeFeatures;
    },
    rows(){
      return Math.ceil(this.features.length/this.cols);
    },
    
  }
};
</script>
<style lang='scss' scoped>
  .mu-paper{
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .row{
      height: 100%;
      // background: khaki;
      .col{
        padding: 0.5rem 0 0 0;
        // background: skyblue;
        text-align: center;
        margin: 0 auto;
        p{
          margin: 0;
          text-align: center;
          // background: skyblue;
        }
        &:nth-last-child(1){
          // background: turquoise;
        }
      }
    }
  }
</style>
