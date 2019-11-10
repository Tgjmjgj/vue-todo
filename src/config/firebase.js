import * as Firebase from 'firebase/app';
import 'firebase/firestore';

const collectionName = 'todo-list';

const firebaseConfig = {
  apiKey: 'AIzaSyD-mTqlhghWErRwtuaPLG1e_a0N45DGRnY',
  authDomain: 'testing-256208.firebaseapp.com',
  databaseURL: 'https://testing-256208.firebaseio.com',
  projectId: 'testing-256208',
  storageBucket: 'testing-256208.appspot.com',
  messagingSenderId: '18742733660',
  appId: '1:18742733660:web:6e170d31de0f2f20e4af99',
  measurementId: 'G-75TXZBWGTW',
};

function configureFirebase() {
  console.log('Firebase Initialization...');
  Firebase.initializeApp(firebaseConfig);
  return new Promise((resolve, reject) => {
    Firebase.firestore().enablePersistence({ synchronizeTabs: true })
      .then(resolve)
      .catch((err) => {
        if (err.code === 'failed-precondition') {
          reject(err);
        } else if (err.code === 'unimplemented') {
          reject(err);
        }
      });
  });
}

const firebaseInit = configureFirebase();

export { collectionName, firebaseInit };
