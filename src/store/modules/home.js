import * as types from "../mutation-types";
import {} from "vuex";
const state = {
  title: "Home",
  features: [],
  carouselImages: []
};
const getters = {
  getTitle: state => state.title,
  getFeatures: s => s.features,
  getCarousels: s => s.carouselImages
};
const mutations = {
  [types.SET_HOME_TITLE](state, payload) {
    state.title = payload.title;
  },
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
  setTitle: function({ commit }) {
    commit(types.SET_HOME_TITLE, "home标题");
  },
  fetchHomeFeatures({ commit }) {
    commit(types.FETCH_HOME_FEATURES);
    //位置越小越排在前面
    return Promise.resolve([
      {
        title: "团队",
        order: 1,
        icon: "menu"
      },
      {
        title: "活动",
        order: 3,
        icon: "menu"
      },
      {
        title: "打卡",
        order: 2,
        icon: "menu"
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
