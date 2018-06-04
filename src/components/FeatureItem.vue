<template>
  <mu-flex direction='column'>
    <mu-divider></mu-divider>
    <mu-list-item button  avatar=''>
      <mu-list-item-action button>
        <mu-avatar>
          <img :src="item.avatar">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title v-if='item.titleInfo&&item.titleInfo.title'>{{item.titleInfo.title}}</mu-list-item-title>
        <mu-list-item-sub-title v-for='(info,index) of item.displayInfos' :key='index'>
          <mu-flex class="item-info-key-value">
            <mu-flex fill class="item-label">{{info.label}}</mu-flex>
            <mu-flex class='item-value'>{{item[info.key]}}</mu-flex>
          </mu-flex>
        </mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action avatar>
        <mu-flex direction='column' align-items='center'>
          <mu-button icon small >
            <mu-icon value="add_circle_outline"></mu-icon>
          </mu-button>
          <mu-button icon small >
            <mu-icon value="add_circle_outline"></mu-icon>
          </mu-button>
        </mu-flex>
    </mu-list-item-action>    
    </mu-list-item>
  </mu-flex>
    
</template>
<script>
export default {
  props: {
    item: {
      type: null,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  mounted(){
    // console.log(this.item)
  }
};
</script>
<style lang="scss" scoped>
   .mu-divider + li{
     width: 100%;
   }  
   .item-value{
     margin-left: auto;
   }
   .item-info-key-value{
     justify-content: space-between;
   }

</style>

