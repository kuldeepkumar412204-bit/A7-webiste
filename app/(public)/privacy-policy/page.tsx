import type { Metadata } from "next";

const SITE_URL = process.env.SITE_URL || "https://a7sattaking.com";

export const metadata: Metadata = {
  title: "A7satta King Privacy Policy 2026",

  description:
    "Read the A7satta King Privacy Policy to understand how we collect, use, and protect your personal information, cookies, and user data securely.",

  keywords: [
    "A7satta King Privacy Policy",
    "A7 Satta King data policy",
    "user data protection",
    "cookies policy A7satta",
    "privacy terms A7 Satta King",
  ],

  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    title: "A7satta King Privacy Policy 2026",
    description:
      "Read the A7satta King Privacy Policy to understand how we collect, use, and protect your personal information, cookies, and user data securely.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: "A7 Satta King",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "A7satta King Privacy Policy 2026",
    description:
      "Read the A7satta King Privacy Policy to understand how we collect, use, and protect your personal information, cookies, and user data securely.",
  },

  authors: [
    {
      name: "A7 Satta King",
      url: SITE_URL,
    },
  ],

  creator: "A7 Satta King",
  publisher: "A7 Satta King",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Heading */}
      <div className="bg-[linear-gradient(180deg,_#ff9000,_#ffe400)] border-b border-b-black border-t-[2px] border-t-black text-black py-[20px]">
        <h2 className="text-[calc(1.375rem+1.5vw)] min-[1200px]:text-[2.5rem] text-center uppercase font-bold">
          Privacy Policy
        </h2>
      </div>

      {/* Privacy Policy Content */}
      <div>
        <div className="max-w-[700px] mx-auto text-[20px] font-normal p-[1rem]">
          <p className="mb-10">
            Welcome to the A7satta King Privacy Policy Page.
          </p>

          <p className="mb-10">
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you access and use our website.
          </p>

          {/* Information We Collect */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Information We Collect
          </h2>

          <p className="mb-4">
            We may gather and process the following types of information:
          </p>

          <ul className="list-disc pl-6 mb-10 space-y-3">
            <li>
              <strong>Personal Information:</strong> This includes details such
              as your name, email address, and other contact information that
              you voluntarily provide through forms or interactions on our
              website.
            </li>

            <li>
              <strong>Usage Data:</strong> We may collect technical and
              usage-related information, including your IP address, browser
              type, pages visited, and other analytical data to understand user
              behavior.
            </li>
          </ul>

          {/* How We Use Your Information */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            How We Use Your Information
          </h2>

          <p className="mb-4">
            The information we collect is used for the following purposes:
          </p>

          <ul className="list-disc pl-6 mb-10 space-y-3">
            <li>To operate and maintain our website efficiently.</li>

            <li>
              To enhance your browsing experience by offering personalized
              content and features.
            </li>

            <li>To analyze website performance and improve functionality.</li>

            <li>
              To communicate with you, respond to queries, and provide updates
              when necessary.
            </li>
          </ul>

          {/* Sharing of Information */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Sharing of Information
          </h2>

          <p className="mb-4">
            We do not share your personal information except in the following
            situations:
          </p>

          <ul className="list-disc pl-6 mb-10 space-y-3">
            <li>When we have your consent.</li>

            <li>When required by law or legal obligations.</li>

            <li>To safeguard our rights, property, or safety.</li>
          </ul>

          {/* Cookies Policy */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Cookies Policy
          </h2>

          <p className="mb-10">
            Our website uses cookies and similar technologies to improve user
            experience. You have the option to accept or decline cookies through
            your browser settings. By default, most browsers accept cookies
            automatically.
          </p>

          {/* Data Security */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Data Security
          </h2>

          <p className="mb-10">
            We take appropriate security measures to protect your personal
            information from unauthorized access, misuse, or disclosure.
            However, no online platform can guarantee complete security.
          </p>

          {/* Updates to This Policy */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Updates to This Policy
          </h2>

          <p className="mb-10">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page and will become effective immediately
            upon publication.
          </p>

          {/* Contact Us */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Contact Us
          </h2>

          <p className="mb-6">
            If you have any questions or concerns regarding this Privacy Policy,
            you can reach us at{" "}
            <a href="mailto:mail@a7satta.com" className="underline">
              mail@a7satta.com
            </a>
            .
          </p>

          <p className="mb-4">
            <strong>
              <em>
                Thank you for choosing A7satta King. Your privacy and trust are
                important to us.
              </em>
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
