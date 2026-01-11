// src/firebase.tsx
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdml16d3VhbfuQ4uulQ33UlDdh8vL2fn0",
  authDomain: "portfolio-79e38.firebaseapp.com",
  projectId: "portfolio-79e38",
  storageBucket: "portfolio-79e38.firebasestorage.app",
  messagingSenderId: "999371222627",
  appId: "1:999371222627:web:4e0f807c0ed950237a5256",
  measurementId: "G-71D62EKDPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics =
  typeof window !== "undefined" && window.indexedDB
    ? getAnalytics(app)
    : null;

// ✅ EXPORT analytics (fixes ESLint error)
export { analytics };

// Firestore
export const db = getFirestore(app);

export default app;
