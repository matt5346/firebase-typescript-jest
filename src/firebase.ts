import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDW5kVuaTgdNVUIfFy4KS96uuINvNm5pM4',
  authDomain: 'vuets-login.firebaseapp.com',
  projectId: 'vuets-login',
  storageBucket: 'vuets-login.appspot.com',
  messagingSenderId: '1015111658917',
  appId: '1:1015111658917:web:3324ddb174f91e0d324c4c',
  measurementId: 'G-FEZ7R72T5S',
};

const app = firebase.initializeApp(firebaseConfig);

export default (app);
