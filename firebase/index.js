import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-j7UrLXu6TYrKp_pgWplCMsBNnpwxddw",
  authDomain: "reactnative-1e106.firebaseapp.com",
  projectId: "reactnative-1e106",
  storageBucket: "reactnative-1e106.appspot.com",
  messagingSenderId: "576209887300",
  appId: "1:576209887300:web:2dac42ae9eed010dd61c11",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
