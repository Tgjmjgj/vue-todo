
/*
state.data type is {
  [id: string]: FirestoreListItem;
}
FirestoreListItem -> see /src/util/listItemUtils.js
*/

import { collectionName } from '@/config/firebase';
import items from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

const defaultFilter = [
  ['deleted', '==', false],
];

const firestoreModule = {
  firestorePath: collectionName,
  firestoreRefType: 'collection',
  moduleName: 'todoList',
  statePropName: 'data',
  namespaced: true,
  sync: {
    where: defaultFilter,
  },
  state: {}, // see the comment on the top
  getters: {
    items,
  },
  mutations,
  actions,
};

export default firestoreModule;
