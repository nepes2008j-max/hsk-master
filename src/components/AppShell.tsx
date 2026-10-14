"use client";

import Nav from "./Nav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100dvh]">
      <Nav />
      <main className="flex-1 pb-28 md:pb-0">
        <div className="max-w-2xl mx-auto px-4 py-5 md:px-6 md:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
