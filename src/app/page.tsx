"use client";
// The app opens on the main page (Home). The old marketing page lives at /welcome.
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  useEffect(() => { router.replace("/dashboard"); }, [router]);
  return <div className="min-h-screen bg-bg" />;
}
