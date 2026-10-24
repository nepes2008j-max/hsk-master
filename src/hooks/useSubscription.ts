"use client";

import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export interface Subscription {
  plan: "free" | "trial" | "monthly" | "semi" | "annual";
  trialStart?: number;
  expiresAt?: number;
}

const TRIAL_DAYS = 5;

export function useSubscription() {
  const { user } = useAuth();
  const [sub, setSub] = useState<Subscription>({ plan: "free" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { setSub({ plan: "free" }); setLoading(false); return; }

    (async () => {
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        const data = snap.data();
        const s = data?.subscription as Subscription | undefined;

        if (s?.plan && s.plan !== "free" && s.plan !== "trial") {
          if (!s.expiresAt || s.expiresAt > Date.now()) { setSub(s); setLoading(false); return; }
          setSub({ plan: "free" }); setLoading(false); return;
        }

        if (s?.plan === "trial" && s.trialStart) {
          const elapsed = Date.now() - s.trialStart;
          if (elapsed < TRIAL_DAYS * 86400000) { setSub(s); setLoading(false); return; }
          setSub({ plan: "free" }); setLoading(false); return;
        }

        // First sign-in: start trial
        const trial: Subscription = { plan: "trial", trialStart: Date.now() };
        await setDoc(doc(db, "users", user.uid), { subscription: trial }, { merge: true });
        setSub(trial);
      } catch {
        setSub({ plan: "free" });
      }
      setLoading(false);
    })();
  }, [user]);

  const isPremium = sub.plan !== "free";

  const trialDaysLeft = sub.plan === "trial" && sub.trialStart
    ? Math.max(0, Math.ceil((sub.trialStart + TRIAL_DAYS * 86400000 - Date.now()) / 86400000))
    : 0;

  return { subscription: sub, isPremium, trialDaysLeft, loading };
}
