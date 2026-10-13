"use client";

import { LangProvider } from "@/lib/i18n";
import type { ReactNode } from "react";

export function LangWrapper({ children }: { children: ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
