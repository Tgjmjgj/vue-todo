
import { firestore } from 'firebase/app';
/*
interface Timestamp {
  seconds: number;
  nanoseconds: number;
  toDate(): Date;
  static fromDate(dt: date): Timestamp;
}

interface FirestoreListItem {
  header: string;
  content: string;
  deleted: bool;
  creationTime: Timestamp;
  completionTime?: Timestamp;
  id?: string;
}

interface JsListItem {
  id: string;
  header: string;
  content: string;
  deleted: bool;
  creationTime: Date;
  completionTime?: Date;
}
*/

/**
 * Convert FirebaseListItem with a given Id to JsListItem object
 * @param itemId string
 * @param fsListItem FirestoreListItem
 * @returns JsListItem
 */
function fsListItemToJs(itemId, fsListItem) {
  const jsStyleObj = {
    id: itemId,
    header: fsListItem.header,
    content: fsListItem.content,
    deleted: fsListItem.deleted,
    creationTime: fsListItem.creationTime.toDate(),
  };
  if (fsListItem.completionTime) {
    jsStyleObj.completionTime = fsListItem.completionTime.toDate();
  }
  return jsStyleObj;
}

/**
 * Convert JsListItem object to FirestoreListItem
 * with optional preserving of id key
 * @param jsListItem JsListItem
 * @param preserveId bool
 * @returns FirebaseListItem
 */
function jsListItemToFs(jsListItem, preserveId = true) {
  const fsStyleObj = {
    header: jsListItem.header,
    content: jsListItem.content,
    deleted: jsListItem.deleted,
    creationTime: firestore.Timestamp.fromDate(jsListItem.creationTime),
  };
  if (jsListItem.completionTime) {
    fsStyleObj.completionTime = firestore.Timestamp.fromDate(jsListItem.completionTime);
  }
  if (preserveId) {
    fsStyleObj.id = jsListItem.id;
  }
  return fsStyleObj;
}

/**
 * Compare for equality all keys and values in the `properties` object
 * to the properties of `original` object
 * ignoring optional id key
 * @param target FirestoreListItem
 * @param original FirestoreListItem
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
      if (value instanceof firestore.Timestamp && (
        value.seconds !== original[key].seconds
        || value.nanoseconds !== original[key].nanoseconds)
      ) {
        return false;
      } if (value !== original[key]) {
        return false;
      }
    }
  }
  return true;
}

export { jsListItemToFs, fsListItemToJs, equalAllListItemProperties };
