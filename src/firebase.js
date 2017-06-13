import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBe6XvwSWlVLJkaZ579_K5TpgQHkIScV-c',
  authDomain: 'portfolio-paula.firebaseapp.com',
  databaseURL: 'https://portfolio-paula.firebaseio.com',
  projectId: 'portfolio-paula',
  storageBucket: 'portfolio-paula.appspot.com',
  messagingSenderId: '293359262937'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
