
import { fsListItemToJs } from '@/util/listItemUtils';

function items(state) {
  return Object.entries(state.data)
    .map(([itemId, item]) => fsListItemToJs(itemId, item))
    .sort((item1, item2) => item1.creationDate > item2.creationDate);
}

export default items;
