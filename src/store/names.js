
export const MODULE_NAME = 'todoList';

export const ITEM_CREATE = 'ITEM_CREATE';
export const ITEM_UPDATE = 'ITEM_UPDATE';
export const ITEM_DELETE = 'ITEM_DELETE';

// Here may be missleading slash '/' in front of the path, when used without a module
export function pathto(action) {
  return `${MODULE_NAME}/${action}`;
}
