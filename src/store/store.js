import Vuex from "vuex";
import Vue from "vue";
import home from "./modules/home";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import team from './modules/team';
import activities from './modules/activities';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
    },
    mutations,
    getters,
    actions,
    modules:{
        home,team,activities
    },
    strict:process.env.NODE_ENV!=='production'
});
export default store;