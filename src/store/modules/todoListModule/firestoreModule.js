
/*
state.data type is {
  [id: string]: JsListItem;
}
FirestoreListItem -> see /src/util/listItemUtils.js
*/

import { collectionName } from '@/config/firebase';
import items from './getters';
import * as mutations from './mutations';
import * as actions from './actions';
import {
  ITEM_CREATE,
  ITEM_UPDATE,
  ITEM_DELETE,
  MODULE_NAME,
} from '@/store/names';

const defaultFilter = [
  ['deleted', '==', false],
];

const firestoreModule = {
  firestorePath: collectionName,
  firestoreRefType: 'collection',
  moduleName: MODULE_NAME,
  statePropName: 'data',
  namespaced: true,
  sync: {
    where: defaultFilter,
    guard: ['created_at', 'created_by'],
  },
  serverChange: {
    convertTimestamps: {
      creationTime: '%convertTimestamp%',
      completionTime: '%convertTimestamp%',
    },
  },
  state: {}, // see the comment on the top
  getters: {
    items,
  },
  mutations: {
    [ITEM_CREATE]: mutations.insert,
    [ITEM_UPDATE]: mutations.patch,
    [ITEM_DELETE]: mutations.markAsDeleted,
  },
  actions: {
    [ITEM_CREATE]: actions.createItem,
    [ITEM_UPDATE]: actions.updateItem,
    [ITEM_DELETE]: actions.deleteItem,
  },
};

export default firestoreModule;
