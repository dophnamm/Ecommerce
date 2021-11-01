import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAetl91ZbV03e3ew6tqjc8tQXOS93splmY",
	authDomain: "eshop-5b4d8.firebaseapp.com",
	projectId: "eshop-5b4d8",
	storageBucket: "eshop-5b4d8.appspot.com",
	messagingSenderId: "2605887647",
	appId: "1:2605887647:web:355567abe6d8ee9cb7b2aa",
	measurementId: "G-EP92RBYV38",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
