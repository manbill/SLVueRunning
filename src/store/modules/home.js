import * as types from "../mutation-types";
import {ROUTE_PATHS} from '../../routes/app-routes/app-route';
import {} from "vuex";
const state = {
  features: [],
  carouselImages: []
};
const getters = {
  getFeatures: s => s.features,
  getCarousels: s => s.carouselImages
};
const mutations = {
  [types.FETCH_HOME_FEATURES_COMPLETED](s, payload) {
    s.features = payload;
  },
  [types.FETCH_HOME_CAROUSELS_COMPLETED](s, payload) {
    s.carouselImages = payload;
  },
  [types.FETCH_HOME_CAROUSELS](){
    // console.log(s);
  }
  ,
  [types.FETCH_HOME_FEATURES](){
    // console.log(s);
  }
};
const actions = {
  fetchHomeFeatures({ commit }) {
    commit(types.FETCH_HOME_FEATURES);
    //位置越小越排在前面
    return Promise.resolve([
      {
        title: "团队",
        order: 1,
        icon: "menu",
        route:ROUTE_PATHS.team
      },
      {
        title: "活动",
        order: 3,
        icon: "menu",
        route:ROUTE_PATHS.activities
      },
      {
        title: "打卡",
        order: 2,
        icon: "menu",
        route:ROUTE_PATHS.clocking
      }
    ]).then(fts => {
      commit(types.FETCH_HOME_FEATURES_COMPLETED, fts);
    });
  },
  fetchCarousels({ commit }) {
    return Promise.resolve()
    .then(()=>{
        commit(types.FETCH_HOME_CAROUSELS)
    })
      .then(() => {
        return Promise.resolve(
          new Array(10).fill(null).map((a, i) => {
            return {
              src: require(`../../assets/images/${i + 1}.jpg`),
              caption: "logo",
              id: i++
            };
          })
        );
      })
      .then(carousels => {
        return commit(types.FETCH_HOME_CAROUSELS_COMPLETED, carousels);
      });
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
