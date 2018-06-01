import * as types from "../mutation-types";
import { mapActions,mapGetters,mapMutations,mapState } from "vuex";
const state={
    title:"Home"
}
const getters={
    getTitle:state=>state.title
}
const mutations={
    [types.SET_HOME_TITLE](state,payload){
        state.title=payload.title;
    },
}
const actions={
    setTitle:function({commit}){
        commit(types.SET_HOME_TITLE,"home标题")
    }
}
export default{
    state,
    getters,
    mutations,
    actions
}