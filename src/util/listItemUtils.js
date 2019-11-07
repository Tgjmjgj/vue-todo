/*
interface JsListItem {
  id?: string;
  header: string;
  content: string;
  deleted: bool;
  creationTime: Date;
  completionTime?: Date;
}
*/

/**
 * Compare for equality all keys and values in the `properties` object
 * to the properties of `original` object
 * ignoring optional id key
 * @param properties subset of JsListItem
 * @param original JsListItem
 * @returns bool
 */
function equalAllListItemProperties(properties, original) {
  const entries = Object.entries(properties);
  for (let i = 0; i < entries.length; i += 1) {
    const [key, value] = entries[i];
    if (key !== 'id') {
      if (!Object.prototype.hasOwnProperty.call(original, key)) {
        return false;
      }
      if (value instanceof Date && original[key] instanceof Date) {
        if (value.getTime() !== original[key].getTime()) {
          return false;
        }
      } else if (value !== original[key]) {
        return false;
      }
    }
  }
  return true;
}

export default equalAllListItemProperties;
