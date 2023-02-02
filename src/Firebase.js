import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMaWK5MkPT0BJR3tDEzguuWM1ZnbbM8WU",
  authDomain: "loop-6fcf8.firebaseapp.com",
  projectId: "loop-6fcf8",
  storageBucket: "loop-6fcf8.appspot.com",
  messagingSenderId: "754624311525",
  appId: "1:754624311525:web:b371d1cd9ff943e8e8e40c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
