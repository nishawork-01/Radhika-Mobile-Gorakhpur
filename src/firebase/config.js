import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// tumhara Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDAuZpW41BS9W87yB0x5M4wB-KBJR8wrtk",
  authDomain: "radhika-mobile-ece55.firebaseapp.com",
  projectId: "radhika-mobile-ece55",
  storageBucket: "radhika-mobile-ece55.firebasestorage.app",
  messagingSenderId: "177901239014",
  appId: "1:177901239014:web:b77910846a9b7e1bf35927"
};

// initialize
const app = initializeApp(firebaseConfig);

// export services
export const auth = getAuth(app);
export const db = getFirestore(app);
