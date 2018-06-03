<template>
    <div class='carousel-wrapper'  v-finger:swipe="swipe">
      <div class="carousel-inner" ref="carouselInner" :style="{width:images.length*100+'%'}">
        <div class='carousel-item' ref="carouselDomItems" :class="active[index]" v-for='(img,index) of images' :key='index' >
          <img :src="img.src"  :alt="img.caption">
          <caption class="caption">
            <h3>第{{index+1}}张图片</h3>
            <p>
              {{index+1}}
            </p>
          </caption>
        </div>
      </div>
      <div class="pre">
        <mu-button icon color='white' @click="pre">
          <mu-icon :size='40' :style="{fontWeight:'bold'}" value='chevron_left'></mu-icon>
        </mu-button>
      </div>
      <div class="next">
        <mu-button icon color='white' @click="next">
          <mu-icon :size='40' :style="{fontWeight:'bold'}" value='chevron_right'></mu-icon>
        </mu-button>
      </div>
      <ul class="indicators">
        <li v-for='(n,index) of images' @click="showIndicatorImage(index)" :class="active[index]" :key='index'></li>
      </ul>
    </div>
</template>
<script>
export default {
  name: "carousel-image",
  props:{
    carousels:{
      type:Array,
      default:()=>[]
    },
    intervalTime:{
      type:Number,
      default:3*1000
    }
  },
  data() {
    return {
      active: {},
      curIndex: 0,
      intervalHandler:null
    };
  },
  created() {
    window.console.log(this.intervalTime);
    var self = this;
    this.intervalHandler = setInterval(()=>{
      // console.log(self.interval);
      self.next();
    },this.intervalTime);
  },
  destroyed(){
    clearInterval(this.intervalHandler);
  },
  methods: {
    swipe(evt){
      // window.console.log(evt);
      if(evt.direction&&"left".toLowerCase()==evt.direction.toLowerCase()){
        this.next();
      }else{
        this.pre();
      }
    },
    pre() {
      this.showIndicatorImage(this.calcIndex(this.curIndex - 1));
    },
    calcIndex(index) {
      return index < 0 //如果想要的是第一张的前一张
        ? this.images.length - 1
        : index >= this.images.length //如果想要返回最后一张的下一张
          ? 0
          : index; //如果都不是，返回index本身
    },
    next() {
      this.showIndicatorImage(this.calcIndex(this.curIndex + 1));
    },
    curDom() {
      return this.$refs.carouselDomItems[this.curIndex];
    },
    preDom() {
      return this.$refs.carouselDomItems[this.calcIndex(this.curIndex - 1)];
    },
    nextDom() {
      return this.$refs.carouselDomItems[this.calcIndex(this.curIndex + 1)];
    },
    showIndicatorImage(index) {
      // window.console.log(index,'curIndex:'+this.curIndex);
      this.curIndex = index;
      Object.keys(this.active).map(k=>this.active[k].active=k==index);
    }
  },
  computed: {
    images() {
      // window.console.log("computed");
      this.carousels.map((img,i)=>this.$set(this.active, i, { active: i == 0 }));      
      return this.carousels;
    }
  }
};
</script>
<style lang='scss' scoped>
.carousel-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  * {
    margin: 0;
    padding: 0;
  }
  .carousel-inner {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-flow: wrap nowrap;
    .carousel-item {
      position: relative;
      flex: 1;
      visibility: collapse;
      opacity: 0.5;
      transition:opacity 1s ease-out;
      .caption {
        // display: none;
        position: absolute;
        left: 15%;
        right: 15%;
        bottom: 10px;
        padding: 5px;
        text-align: center;
        color: white;
        z-index: 10;
      }
      &.active {
        opacity: 1;
        visibility: visible;
        order: -1;
        .caption {
          display: block;
        }
      }

      img {
        height: 100%;
        width: 100%;
        vertical-align: middle;
        outline: none;
      }
    }
  }
  .indicators {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    z-index: 15;
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0 15%;
    li {
      position: relative;
      opacity: 0.8;
      flex: 0 1 auto;
      width: 30px;
      height: 3px;
      margin: 0 3px;
      background-color: white;  
      &.active {
        opacity: 1;
        background-color: red;  
      }
      cursor: pointer;
      &:after,
      &::before {
        display: block;
        content: " ";
        position: absolute;
        background: transparent;
        left: 0;
        width: 100%;
        height: 10px;
      }
      &:after {
        top: -10px;
      }
      &:before {
        bottom: -10px;
      }
    }
  }
  .pre,
  .next {
    position: absolute;
    top: 0;
    z-index: 15;
    bottom: 0;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    &.active {
      opacity: 1;
    }
  }
  .next {
    right: 0;
  }
  .pre {
    left: 0;
  }
}
</style>
