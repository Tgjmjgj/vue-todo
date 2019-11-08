import { MODULE_NAME } from '@/store/names';

function insert(state, newItem) {
  this.dispatch(`${MODULE_NAME}/insert`, newItem);
}

function patch(state, updatedItem) {
  this.dispatch(`${MODULE_NAME}/patch`, updatedItem);
}

function markAsDeleted(state, itemId) {
  this.dispatch(`${MODULE_NAME}/patch`, { id: itemId, deleted: true });
}

export { insert, patch, markAsDeleted };
