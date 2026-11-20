// app/disclaimer/page.tsx
import type { Metadata } from "next";
import DisclaimerClient from "./DisclaimerClient";

export const metadata: Metadata = {
  title: "अस्वीकरण (Disclaimer) | A7 Satta King",
  description:
    "जानकारी की सटीकता, थर्ड-पार्टी लिंक्स, व्यक्तिगत जिम्मेदारी, कानूनी नियम और वेबसाइट के उपयोग से संबंधित A7 Satta King का अस्वीकरण (Disclaimer) पढ़ें।",
  alternates: {
    canonical: "https://www.a7sattaking.co/disclaimer",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "अस्वीकरण (Disclaimer) | A7 Satta King",
    description:
      "A7 Satta King का अस्वीकरण (Disclaimer) और वेबसाइट के उपयोग से संबंधित महत्वपूर्ण जानकारी पढ़ें।",
    url: "https://www.a7sattaking.co/disclaimer",
    siteName: "A7 Satta King",
    locale: "hi_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "अस्वीकरण (Disclaimer) | A7 Satta King",
    description:
      "A7 Satta King का अस्वीकरण (Disclaimer) और वेबसाइट के उपयोग से संबंधित महत्वपूर्ण जानकारी पढ़ें।",
  },
};

export default function Page() {
  return <DisclaimerClient />;
}
