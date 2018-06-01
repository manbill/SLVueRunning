import * as types from "./mutation-types";
export default{
    hideAppBar({commit}){
      return commit(types.HIDE_APP_BAR,false);
    },
    showAppBar({commit}){
      return commit()
    }
}