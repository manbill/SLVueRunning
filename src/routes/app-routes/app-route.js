import Home from "../../pages/Home";
const Team = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Team");
const Clocking = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Clocking");
const Activities = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Activities");
const Me = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Me");
const Competition = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Competition");
const Enroll = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Enroll");
const Member = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Member");
const Commonweal = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Commonweal");
const Attendance = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Attendance");
//定义路由时候，注意要给路由定义name属性，别的地方需要用
const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    children: []
  },
  {
    path: "/team",
    component: Team,
    name: "team"
  },
  {
    path: "/clocking",
    component: Clocking,
    name: "clocking"
  },
  {
    path: "/activities",
    component: Activities,
    name: "activities"
  },
  {
    path: "/me",
    component: Me,
    name: "me"
  },
  {
    path: "/attendance",
    component: Attendance,
    name: "attendance"
  },
  {
    path: "/enroll",
    component: Enroll,
    name: "Enroll"
  },
  {
    path: "/competition",
    component: Competition,
    name: "competition"
  },
  {
    path: "/commonweal",
    component: Commonweal,
    name: "commonweal"
  },
  {
    path: "/member",
    component: Member,
    name: "member"
  }
];
export default routes;
