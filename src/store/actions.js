import * as types from "./mutation-types";
export default {
    hideAppBar({commit}){
      return commit(types.SHOW_APP_BAR,false);
    },
    showAppBar({commit}){
      return commit(types.SHOW_APP_BAR,true );
    },
    setAppBarTitle({commit},payload){
      // console.log(payload);
      commit(types.SET_APP_BAR_TITLE,payload);
    }
}