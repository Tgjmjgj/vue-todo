
/*
interface ListEntry {
  header: string;
  content: string;
  creationTime: Date;
  completionTime?: Date;
  deleted: bool;
};

state.data typeof ListEntry[];
*/

const defaultFilter = [
  ['deleted', '==', 'false'],
];

const firestoreModule = {
  firestorePath: 'todo-list',
  firestoreRefType: 'collection',
  moduleName: 'todoList',
  statePropName: 'data',
  namespaced: true,
  sync: {
    defaultFilter,
  },
  state: {}, // see comment on top
  getters: {
    items: state => Object.entries(state.data).map((item) => {
      console.log(item);
      return {
        id: item[0],
        header: item[1].header,
        content: item[1].content,
        deleted: item[1].deleted,
        // Firestore store datetime as object of type { seconds: number, nanoseconds: number }
        creationTime: new Date(
          item[1].creationTime.seconds * 1000 + item[1].creationTime.nanoseconds,
        ),
        comletionTime: (item[1].completionTime ? new Date(
          item[1].completionTime.seconds * 1000 + item[1].completionTime.nanoseconds,
        ) : null),
      };
    }).sort((item1, item2) => item1.creationDate > item2.creationDate),
  },
  mutations: {},
  actions: {},
};

export default firestoreModule;
