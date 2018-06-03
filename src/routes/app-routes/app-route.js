import Home from "../../pages/Home";
const Team = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Team");
const Clocking = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Clocking");
const Activities = () =>
  import(/* webpackChunkName: "home-features" */ "../../pages/Activities");
export const ROUTE_PATHS = {
  team: {
    path: "/team",
    name: "team"
  },
  activities: {
    path: "/activities",
    name: "activities"
  },
  clocking: {
    path: "/clocking",
    name: "clocking"
  }
};
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
  }
];
export default routes;
