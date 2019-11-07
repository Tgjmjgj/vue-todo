
import { jsListItemToFs, equalAllListItemProperties } from '@/util/listItemUtils';

function createItem({ commit }, newItem) {
  const jsItem = { ...newItem };
  if (!Object.prototype.hasOwnProperty.call(jsItem, 'deleted')) {
    jsItem.deleted = false;
  }
  if (!Object.prototype.hasOwnProperty.call(jsItem, 'creationTime')) {
    jsItem.creationTime = new Date();
  }
  const fsItem = jsListItemToFs(jsItem);
  commit('insert', fsItem);
}

function itemExists(state, itemId) {
  return Object.prototype.hasOwnProperty.call(state.data, itemId);
}

function updateItem({ commit, state }, updatedItem) {
  if (!itemExists(state, updatedItem.id)) {
    console.error('Attempt to update item that doesn\'t exists!');
    return;
  }
  const original = state.data[updatedItem.id];
  const fsItem = jsListItemToFs(updatedItem);
  if (!equalAllListItemProperties(fsItem, original)) {
    commit('patch', updatedItem);
  }
}

function deleteItem({ commit, state }, itemId) {
  if (!itemExists(state.data, itemId)) {
    console.error('Attempt to delete item that doesn\'t exists!');
    return;
  }
  commit('markAsDeleted', itemId);
}

export { createItem, updateItem, deleteItem };
