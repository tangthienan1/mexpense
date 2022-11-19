// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCz6a7OKlUL7i7T4VXAvJoMCVhRlm0Qyus',
    authDomain: 'mexpense-570c9.firebaseapp.com',
    projectId: 'mexpense-570c9',
    storageBucket: 'mexpense-570c9.appspot.com',
    messagingSenderId: '8142284106',
    appId: '1:8142284106:web:e27a4b7382544ee5e44db3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
