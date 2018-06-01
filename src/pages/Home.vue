<template>
    <mu-flex class="flex-wrapper" :style='styleObj' direction='column' >
        <mu-flex class='carousel' align-items='center'>
                <mu-button icon >
                    <mu-icon value="keyboard_arrow_left" ></mu-icon>
                </mu-button>
                <mu-flex class='carousel-image' direction='column' justify-content='center'>
                    <mu-paper :z-depth="1">
                    
                    </mu-paper>

                </mu-flex>
                <mu-button  icon >
                <mu-icon value="keyboard_arrow_right" ></mu-icon>
                </mu-button>
        </mu-flex>
        <mu-flex class='grid-buttons' align-items='center'>
            <mu-flex>
                <mu-button icon >
                    <mu-icon value="keyboard_arrow_left" ></mu-icon>
                </mu-button>
            </mu-flex>
            <mu-flex fill justify-content='center'>
                <mu-paper  :z-depth="5" ></mu-paper>
            </mu-flex>
            <mu-flex>
                <mu-button  icon >
                <mu-icon value="keyboard_arrow_right" ></mu-icon>
                </mu-button>
            </mu-flex>
        </mu-flex>
    </mu-flex>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "home",
  props: ["height"],
  data() {
    return {
      home: "首页",
      styleObj: {}
    };
  },
  created(){
      this.styleObj = {
        height:
          (this.appBar.show
            ? window.innerHeight - this.appBar.height
            : window.innerHeight) + "px"
      }
  },
  computed: {
    ...mapGetters(["appBar"])
  }
};
</script>
<style lang='scss' scoped>
.flex-wrapper {
  width: 100%;
  .carousel {
    width: inherit;
    height: 50%;
  }
  .grid-buttons {
    width: inherit;
    height: 50%;
  }
  .carousel {
    background: skyblue;
    .carousel-image {
      background: tomato;
      height: 80%;
      flex: 10 1 0;
    }
  }
  .grid-buttons {
    background: khaki;
  }
}
</style>
