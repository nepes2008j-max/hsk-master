"use client";

import Nav from "./Nav";

// viewKey: pass a different value per in-page view (list / detail) to replay the page-in animation.
export default function AppShell({ children, viewKey }: { children: React.ReactNode; viewKey?: string }) {
  return (
    <div className="flex min-h-[100dvh]">
      <Nav />
      <main className="flex-1 min-w-0 pb-28 md:pb-0">
        <div key={viewKey} className="page-in max-w-2xl mx-auto px-4 py-5 md:px-6 md:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
