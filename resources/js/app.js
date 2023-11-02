import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import DashboardPlugin from './plugins/dashboard-plugin';
import VueMask from 'v-mask'
import App from './App.vue';
import store from './store';
import './style.css';
import './staticstyle.css';
import './assets/aktivfont/stylesheet.css';
import './assets/gilroy/stylesheet.css';
import './assets/fahkwang/stylesheet.css';
// router setup
import router from './routes/router';
// plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueMask);
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
