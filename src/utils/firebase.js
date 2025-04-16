// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCFwcJZz63zQogPJxJsNg5NlyhoG-8CYFc",
	authDomain: "uflixgpt.firebaseapp.com",
	projectId: "uflixgpt",
	storageBucket: "uflixgpt.firebasestorage.app",
	messagingSenderId: "718190882393",
	appId: "1:718190882393:web:f3db7b57d727771a314b48",
	measurementId: "G-ZE4GLR6139",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
