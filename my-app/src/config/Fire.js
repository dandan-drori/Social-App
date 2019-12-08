import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBoxisdUk-ZAEtVmabzFs0RaWVx2sTVT9w',
  authDomain: 'social-app-ca70b.firebaseapp.com',
  databaseURL: 'https://social-app-ca70b.firebaseio.com',
  projectId: 'social-app-ca70b',
  storageBucket: 'social-app-ca70b.appspot.com',
  messagingSenderId: '509352709557'
};
const fire = firebase.initializeApp(config);
export default fire;
