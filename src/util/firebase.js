// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-8jDak-pRrqI5tP40EJXw7Xvre4oi22w',
  authDomain: 'survey-7f001.firebaseapp.com',
  projectId: 'survey-7f001',
  storageBucket: 'survey-7f001.appspot.com',
  messagingSenderId: '510246236078',
  appId: '1:510246236078:web:acae367ec964fae401623f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
