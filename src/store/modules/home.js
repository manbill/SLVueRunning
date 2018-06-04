import * as types from "../mutation-types";
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
        route:"team"
      },
      {
        title: "活动",
        order: 3,
        icon: "menu",
        route:"activities"
      },
      {
        title: "打卡",
        order: 5,
        icon: "menu",
        route:"clocking"
      },
      {
        title: "成员",
        order: 2,
        icon: "menu",
        route:"member"
      },
      {
        title: "签到",
        order: 4,
        icon: "menu",
        route:"attendance"
      },
      {
        title: "比赛",
        order: 6,
        icon: "menu",
        route:"competition"
      },
      {
        title: "我的",
        order: 9,
        icon: "menu",
        route:"me"
      }
      ,
      {
        title: "报名",
        order: 7,
        icon: "menu",
        route:"enroll"
      }
      ,
      {
        title: "公益",
        order: 8,
        icon: "menu",
        route:"commonweal"
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
