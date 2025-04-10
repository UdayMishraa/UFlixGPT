// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDSRZzz4_egknldCfE-cOYdaFbjjRywyZk",
	authDomain: "netflix-gpt-56bb3.firebaseapp.com",
	projectId: "netflix-gpt-56bb3",
	storageBucket: "netflix-gpt-56bb3.firebasestorage.app",
	messagingSenderId: "1076195868576",
	appId: "1:1076195868576:web:d71f747fc697814f7feec5",
	measurementId: "G-S452XZW1JH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
