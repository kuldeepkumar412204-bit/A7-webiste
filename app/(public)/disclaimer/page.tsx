// app/disclaimer/page.tsx
import type { Metadata } from "next";
import DisclaimerClient from "./DisclaimerClient";

export const metadata: Metadata = {
  title: "Disclaimer | A7 Satta King",
  description:
    "Read the A7 Satta King disclaimer covering information accuracy, third-party links, personal responsibility, legal advice, and website usage.",
  alternates: {
    canonical: "https://a7sattaking.com/disclaimer",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Disclaimer | A7 Satta King",
    description:
      "Read the A7 Satta King disclaimer and important information regarding website usage.",
    url: "https://a7sattaking.com/disclaimer",
    siteName: "A7 Satta King",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | A7 Satta King",
    description:
      "Read the A7 Satta King disclaimer and important information regarding website usage.",
  },
};

export default function Page() {
  return <DisclaimerClient />;
}
