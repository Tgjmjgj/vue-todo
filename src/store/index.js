import Vue from 'vue';
import Vuex from 'vuex';
import VuexEasyFirestore from 'vuex-easy-firestore';

import { Firebase, initFirebase } from '@/config/firebase';
import { MODULE_NAME } from './names';
import firestoreModule from './modules/todoListModule/firestoreModule';

Vue.use(Vuex);

const easyFirestore = VuexEasyFirestore(
  [firestoreModule],
  { logging: true, FirebaseDependency: Firebase },
);

const store = new Vuex.Store({
  plugins: [
    easyFirestore,
  ],
  modules: {},
  state: {
    loading: null,
  },
  mutations: {},
  actions: {},
  getters: {
    dataLoaded(state) {
      return state.loading;
    },
  },
});

// Load all data from Firestore to the local Vuex store and activate synchronization
store.state.loading = initFirebase()
  .then(() => store.dispatch(`${MODULE_NAME}/openDBChannel`))
  .catch(err => console.log(`Cannot initialize Firebase! Error: ${err}`));

export default store;
