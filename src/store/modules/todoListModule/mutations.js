
function insert(state, newItem) {
  this.dispatch('todoList/insert', newItem);
}

function patch(state, updatedItem) {
  state.dispatch('todoList/patch', updatedItem);
}

function markAsDeleted(state, itemId) {
  state.dispatch('todoList/patch', { id: itemId, deleted: true });
}

export { insert, patch, markAsDeleted };
