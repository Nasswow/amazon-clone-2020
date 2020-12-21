// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyBXs0_uSyG3KCipgZLrPIi11svPK4NHK-g',
	authDomain: 'clone-2020-e3d10.firebaseapp.com',
	projectId: 'clone-2020-e3d10',
	storageBucket: 'clone-2020-e3d10.appspot.com',
	messagingSenderId: '425604012630',
	appId: '1:425604012630:web:7ad5c1be2f0f67e4d379f7',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
