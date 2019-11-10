import Vue from 'vue';
import Vuex from 'vuex';
import VuexEasyFirestore from 'vuex-easy-firestore';

import * as Firebase from 'firebase/app';
import { firebaseInit } from '@/config/firebase';
import { MODULE_NAME } from './names';
import firestoreModule from './modules/todoListModule/firestoreModule';

Vue.use(Vuex);

const easyFirestore = VuexEasyFirestore(
  [firestoreModule],
  { logging: true, FirebaseDependency: Firebase },
);

let loading = null;

const store = new Vuex.Store({
  plugins: [
    easyFirestore,
  ],
  modules: {},
  state: {
    isLoaded: false,
  },
  mutations: {
    load(state) {
      state.isLoaded = true;
    },
  },
  actions: {
    waitItemsLoading({ commit }) {
      return new Promise((resolve) => {
        loading.then(() => {
          commit('load');
          resolve();
        });
      });
    },
  },
  getters: {
    isLoaded(state) {
      return state.isLoaded;
    },
  },
});

// Load all data from Firestore to the local Vuex store and activate synchronization
loading = firebaseInit
  .then(() => store.dispatch(`${MODULE_NAME}/openDBChannel`))
  .catch(err => console.log(`Cannot initialize Firebase! Error: ${err}`));

export default store;
