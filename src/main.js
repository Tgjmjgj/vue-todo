import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faPen,
  faTimes,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VuePaginate from 'vue-paginate';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faUserSecret, faTimes, faPen, faCheck, faClock);

Vue.use(VuePaginate);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
