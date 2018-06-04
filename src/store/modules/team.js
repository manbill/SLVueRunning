import * as types from '../mutation-types';
const state = {
  teams: [],
  isLoading: false,
  scroller: null,
  infiniteScrollEnable: true,
  pageLimit: 5,
}
const mutations = {
  [types.TEAM_DATA_IS_LOADING](s, payload) {
    s = {
      ...s,
      isLoading: payload
    }
  },
  [types.SET_TEAM_INFINITE_SCROLL_STATE](s, payload) {
    s = {
      ...s,
      infiniteScrollEnable: !!payload
    }
  },
  [types.GET_MORE_TEAM_LIST_DATA](s, payload) {
    s = {
      ...s,
      teams: [...s.teams, ...payload]
    }
  }
}
const actions = {
  getMoreTeamData({ commit, dispatch }, payload) {
    return dispatch("setTeamIsLoading",true)
      .then(()=>dispatch("setInfiniteScrollStat",true))
      .then(()=>new Array(20).fill(null))
      .then((arr) => {
        var res = arr.map((t, i) => {
          return {
            type: "running",
            name: "岁月彩虹【" + i + "】",
            teamMemberNumbers: Math.ceil(Math.random() * 10),
            desc: `岁月彩虹【"+${i}+"】的描述信息...`,
            dateTime: new Date(),
            location: "上海 > 松江",
            id: i
          }
        });
        setTimeout(() => {
          commit(types.TEAM_DATA_IS_LOADING, false);
          if (res.length == 0) {
            commit(types.SET_TEAM_INFINITE_SCROLL_STATE, false);
          }
          commit(types.GET_MORE_TEAM_LIST_DATA, res);
        }, 1000);
      })
      .catch(e => {
        commit(types.TEAM_DATA_IS_LOADING, false);
      })
  },
  setTeamIsLoading({ commit }, payload) {
    commit(types.TEAM_DATA_IS_LOADING, !!payload);

  },
  setInfiniteScrollStat({ commit }, payload) {
    commit(types.SET_TEAM_INFINITE_SCROLL_STATE, payload);
  }
}
const getters = {
  teams: s => s.teams,
  isLoading: s => s.isLoading,
  infiniteScrollEnable: s => s.infiniteScrollEnable,
  pageLimit: s => s.pageLimit
}

export default {
  state,
  getters,
  actions,
  mutations
}