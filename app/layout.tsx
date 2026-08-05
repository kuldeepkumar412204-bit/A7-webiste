import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import QueryProvider from "./providers/QueryProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A7 Satta King Result | Latest Satta Charts, Matka Results & Updates",
  description: "Check A7 Satta King latest results, daily Satta charts, Matka updates, and records. Stay updated with real-time results and game timings.",
  keywords: "A7 Satta, A7 Satta King, Satta King result, Satta Matka, Satta charts, daily Satta result, Satta King chart, A7 Satta result today, Matka result, Satta games India",
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "A7 Satta King",
  url: "https://a7sattaking.co/",
  logo: "https://a7sattaking.co/logo.png",
  description:
    "A7 Satta King provides latest satta king results, daily satta charts, matka updates, and historical records with real-time updates.",
  sameAs: ["https://a7sattaking.co/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["Hindi", "English"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "A7 Satta King",
  url: "https://a7sattaking.co/",
  description:
    "Check A7 Satta King latest results, daily satta charts, Matka updates, and records with real-time updates and game timings.",
  publisher: {
    "@type": "Organization",
    name: "A7 Satta King",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://a7sattaking.co/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="google-site-verification" content="oBOQi1ZMROmvu5ZMz2NkIqJEm-Huux1VXvwYLW1SnpY" />

        <meta name="msvalidate.01" content="EF72A7197BBE9290314576523B27F5D2" />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">

       {/* Load Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-JNJ1F66QKS`}
          strategy="afterInteractive"
        />

        {/* Initialize Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'G-JNJ1F66QKS');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
