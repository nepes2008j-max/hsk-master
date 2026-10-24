"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider, type User } from "firebase/auth";
import { auth } from "./firebase";
import { startSync, stopSync, pullAndMerge, pushToCloud } from "./sync";

interface AuthCtx {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthCtx>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  logout: async () => {},
});

const googleProvider = new GoogleAuthProvider();

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => onAuthStateChanged(auth, (u) => {
    setUser(u);
    setLoading(false);
    if (u) {
      pullAndMerge().catch(() => {}).finally(() => startSync());
    } else {
      stopSync();
    }
  }), []);

  const signInWithGoogle = async () => { await signInWithPopup(auth, googleProvider); };
  const logout = async () => {
    await pushToCloud().catch(() => {});
    stopSync();
    await signOut(auth);
  };

  return <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
