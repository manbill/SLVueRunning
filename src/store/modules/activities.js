import * as types from '../mutation-types';
import * as moment from 'moment';
const state={
  activites:[]
}
const actions={
  getMoreActivitesData({commit}){
    return Promise.resolve(new Array(25).fill(null))
    .then(arr=>{
      const teamTypes = [
        {
          type: 1,
          name: "跑步活动"
        },
        {
          type:1,
          name:"公益活动"
        },
        {
          type:1,
          name:"健身活动"
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
        name:type.name.substr(0,2)+'活动'
      }));
      var res = arr.map((t, i) => {
        const type = teamTypes[Math.floor(Math.random()*teamTypes.length)]
        return {
          type: type.type,
          typeName:type.name,
          name: `${type.type%2==0?"我的活动【"+i+"】":"神采飞扬活动【"+i+"】"}`,
          teamMemberNumbers: Math.ceil(Math.random() * 10),
          desc: `神采飞扬活动【${i}】的描述信息...`,
          dateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
          location: "上海 > 虹桥",
          id: i,
          joined: Math.floor(Math.random() * 2) == 1,
        }
      });
      return res;
    })
    .then(activites=>{
      var res = activites.map(activite => {
        const avatar = require(`../../assets/images/${Math.floor(1+Math.random()*10)}.jpg`);//团队的图标
        // console.log(avatar);
        return {
          ...activite,
          ...{
            avatar,
            titleInfo:{
              title:activite.name,
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
      return res;
    })
    .then(activites=>{
      commit(types.GET_MORE_ACTIVITIES_DATA,activites);
    })
  }
}
const mutations={
  [types.GET_MORE_ACTIVITIES_DATA](s,payload){
    s.activites=payload
  }
}
const getters={
  getActivites:s=>s.activites
}
export default {
  state,
  getters,
  actions,
  mutations
}