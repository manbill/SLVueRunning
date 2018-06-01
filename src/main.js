import Vue from 'vue';
import App from './App.vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import routes  from "./routes/app-routes/app-route";
import VueRouter from "vue-router";
import store from "./store/store";
import theme from 'muse-ui/lib/theme';
// theme.use('dark');
Vue.use(MuseUI);
Vue.use(VueRouter);
const router  = new VueRouter({
  base:__dirname,
  routes,
  mode:"history"
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
