"use client";

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzU9DZWsN3AJzwPzTgC6CsYga6I_KtWZU",
  authDomain: "hsk-master-225e8.firebaseapp.com",
  projectId: "hsk-master-225e8",
  storageBucket: "hsk-master-225e8.firebasestorage.app",
  messagingSenderId: "433829655529",
  appId: "1:433829655529:web:482517a220afd37c52d178",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
