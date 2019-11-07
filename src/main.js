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
import App from './App.vue';
import router from './router';
import store from './store';

import BaseText from '@/components/base/BaseText.vue';
import BaseHeader from '@/components/base/BaseHeader.vue';
import BaseEditableDiv from '@/components/base/BaseEditableDiv.vue';
import BaseClassicButton from '@/components/base/BaseClassicButton.vue';
import BaseIconButton from '@/components/base/BaseIconButton.vue';

library.add(faUserSecret, faTimes, faPen, faCheck, faClock);

Vue.use(VuePaginate);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('base-text', BaseText);
Vue.component('base-header', BaseHeader);
Vue.component('base-editable-div', BaseEditableDiv);
Vue.component('base-classic-button', BaseClassicButton);
Vue.component('base-icon-button', BaseIconButton);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
