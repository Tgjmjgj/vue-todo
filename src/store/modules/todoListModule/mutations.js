
function insert(state, newItem) {
  this.dispatch('todoList/insert', newItem);
}

function patch(state, updatedItem) {
  this.dispatch('todoList/patch', updatedItem);
}

function markAsDeleted(state, itemId) {
  this.dispatch('todoList/patch', { id: itemId, deleted: true });
}

export { insert, patch, markAsDeleted };
