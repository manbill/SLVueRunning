import * as types from "./mutation-types";
export default{
  [types.SHOW_APP_BAR](state,payload){
    state.appBar={
      ...state.appBar,
      show:!!payload
    }
  },
  [types.SET_APP_BAR_TITLE](s,payload){
    s.appBar={
      ...s.appBar,
      title:payload.title
    }
  }

}