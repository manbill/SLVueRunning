import Vuex from "vuex";
import Vue from "vue";
import home from "./modules/home";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        appBar:{
            height:56,
            show:true
        }
    },
    mutations,
    getters,
    actions,
    modules:{
        home
    },
    strict:process.env.NODE_ENV!=='production'
});
export default store;