
import { collectionName } from '@/config/firebase';

function insert(state, newItem) {
  state.dispatch(`${collectionName}/insert`, newItem);
}

function patch(state, updatedItem) {
  state.dispatch(`${collectionName}/patch`, updatedItem);
}

function markAsDeleted(state, itemId) {
  state.dispatch(`${collectionName}/patch`, { id: itemId, deleted: true });
}

export { insert, patch, markAsDeleted };
