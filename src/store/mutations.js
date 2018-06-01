import * as types from "./mutation-types";
export default{
  [types.SHOW_APP_BAR](state){
    state.appBar={
      ...state.appBar,
      show:true
    }
  },
  [types.HIDE_APP_BAR](state){
    state.appBar={
      ...state.appBar,
      show:false
    }
  },

}