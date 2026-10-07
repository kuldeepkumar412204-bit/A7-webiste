"use client";

import { usePathname } from "next/navigation";
import React from "react";

// Public site chrome (Navbar, Footer, etc.) should not render inside the admin panel.
export default function HideOnAdmin({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return <>{children}</>;
}
