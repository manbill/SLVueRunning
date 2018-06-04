import * as types from '../mutation-types';
import * as moment from 'moment';
const state = {
  teams: [],
  isLoading: false,
  scroller: null,
  infiniteScrollEnable: true,
  pageLimit: 5,
  currentPage: 1
}
const mutations = {
  [types.TEAM_DATA_IS_LOADING](s, payload) {
    s.isLoading = !!payload;
  },
  [types.SET_TEAM_INFINITE_SCROLL_STATE](s, payload) {
    s.infiniteScrollEnable = !!payload;
  },
  [types.GET_MORE_TEAM_LIST_DATA](s, payload) {
    // console.log(payload);
    s.teams = [...s.teams, ...payload];
  }
}
const actions = {
  getMoreTeamData({ commit, dispatch }, payload) {
    return dispatch("setTeamIsLoading", true)
      .then(() => dispatch("setInfiniteScrollStat", true))
      .then(() => new Array(20).fill(null))
      .then((arr) => {
        // console.log(arr)
        const teamTypes = [
          {
            type: 1,
            name: "跑步"
          },
          {
            type:1,
            name:"游泳"
          },
          {
            type:1,
            name:"健身"
          },
          {
            type:4,
            name:"足球"
          }
          ,
          {
            type:4,
            name:"篮球"
          }
          ,
          {
            type:4,
            name:"排球"
          }
          ,
          {
            type:5,
            name:"登山"
          }
        ].map((type,i)=>({
          type:i+1,
          name:type.name
        }));
        var res = arr.map((t, i) => {
          const type = teamTypes[Math.floor(Math.random()*teamTypes.length)]
          return {
            type: type.type,
            typeName:type.name,
            name: "岁月彩虹【" + i + "】",
            teamMemberNumbers: Math.ceil(Math.random() * 10),
            desc: `岁月彩虹【${i}】的描述信息...`,
            dateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
            location: "上海 > 松江",
            id: i,
            joined: Math.floor(Math.random() * 2) == 1,
          }
        });
        // console.log(res);
        return res;
      })
      .then(teams => {
        // console.log(teams);
        var res = teams.map(team => {
          const avatar = require(`../../assets/images/${Math.floor(1+Math.random()*10)}.jpg`);//团队的图标
          // console.log(avatar);
          return {
            ...team,
            ...{
              avatar,
              titleInfo:{
                title:team.name,
              },//是否是标题
            },
            displayInfos: [
              {
                enabled: true,//是否显示
                key: "dateTime",//要显示的字段在该对象中的键名，value可以用该对象直接通过键来取值
                label: "时间",//该键在界面上显示的中文
              },
              {
                enabled: true,
                key: "typeName",
                label: "类型",
              },
              {
                enabled: true,
                key: "teamMemberNumbers",
                label: "团队人数",
              }
            ]
          }
        });
        // console.log(res)
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
        throw e;
      })
  },
  getMyTeamsData({ commit }) {

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
  pageLimit: s => s.pageLimit,
  currentPage: s => s.currentPage
}

export default {
  state,
  getters,
  actions,
  mutations
}