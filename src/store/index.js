import Vue from 'vue';
import Vuex from 'vuex';
import VuexEasyFirestore from 'vuex-easy-firestore';

import { Firebase, initFirebase } from '@/config/firebase';
import firestoreModule from '@/store/modules/todoListModule/firestoreModule';

Vue.use(Vuex);

const easyFirestore = VuexEasyFirestore(
  [firestoreModule],
  { logging: true, FirebaseDependency: Firebase },
);

const store = new Vuex.Store({
  plugins: [
    easyFirestore,
  ],
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

initFirebase()
  .then(() => {
    store.dispatch('todoList/openDBChannel').catch(console.error);
  })
  .catch((err) => {
    console.log(`Cannot initialize Firebase! Error: ${err}`);
  });

export default store;
