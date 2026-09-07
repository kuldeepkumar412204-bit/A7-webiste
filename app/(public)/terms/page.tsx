import type { Metadata } from "next";

const SITE_URL = process.env.SITE_URL || "https://a7sattaking.com";

export const metadata: Metadata = {
  title: "A7satta King Terms and Conditions 2026",

  description:
    "Read A7satta King Terms and Conditions to understand website usage rules, user responsibilities, disclaimers, and legal policies.",

  keywords: [
    "A7satta King terms and conditions",
    "A7 Satta King rules",
    "website terms A7satta",
    "user agreement A7 Satta King",
    "legal terms A7satta",
  ],

  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
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
    title: "A7satta King Terms and Conditions 2026",
    description:
      "Read A7satta King Terms and Conditions to understand website usage rules, user responsibilities, disclaimers, and legal policies.",
    url: `${SITE_URL}/terms-and-conditions`,
    siteName: "A7 Satta King",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "A7satta King Terms and Conditions 2026",
    description:
      "Read A7satta King Terms and Conditions covering website usage rules, user responsibilities, disclaimers, and legal policies.",
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

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Page Heading */}
      <div className="bg-[linear-gradient(180deg,_#ff9000,_#ffe400)] border-b border-b-black border-t-[2px] border-t-black text-black py-[20px]">
        <h2 className="text-[calc(1.375rem+1.5vw)] min-[1200px]:text-[2.5rem] text-center uppercase font-bold">
          Terms and Conditions
        </h2>
      </div>

      {/* Page Content */}
      <div>
        <div className="max-w-[700px] mx-auto text-[20px] font-normal p-[1rem]">
          {/* Acceptance of Terms */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Acceptance of Terms
          </h2>

          <p className="mb-10">
            By accessing and using the A7satta King website ("Site"), you agree
            to follow and be bound by these Terms and Conditions ("Terms"). If
            you do not agree with any part of these Terms, please do not use
            this Site.
          </p>

          {/* Changes to Terms */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Changes to Terms
          </h2>

          <p className="mb-10">
            A7satta King reserves the right to update, modify, or change these
            Terms at any time without prior notice. Continued use of the Site
            after updates means you accept the revised Terms.
          </p>

          {/* User Conduct */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            User Conduct
          </h2>

          <p className="mb-10">
            You agree not to engage in any activity that may harm, disrupt, or
            interfere with the functioning of the Site. This includes
            unauthorized access to servers, misuse of data, or any action that
            may damage or impair the website.
          </p>

          {/* Intellectual Property */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Intellectual Property
          </h2>

          <p className="mb-10">
            All content available on A7satta King, including text, images,
            graphics, logos, and software, is the property of A7satta King and
            is protected under applicable intellectual property laws. You may
            not copy, reproduce, or distribute any content without prior written
            permission.
          </p>

          {/* Privacy Policy */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Privacy Policy
          </h2>

          <p className="mb-10">
            Your use of the Site is also subject to our Privacy Policy. We
            encourage you to review it to understand how your information is
            collected and used.
          </p>

          {/* Third-Party Links */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Third-Party Links
          </h2>

          <p className="mb-10">
            The Site may contain links to third-party websites for user
            convenience. A7satta King does not control or take responsibility
            for the content or policies of these external sites. Accessing
            third-party links is at your own risk.
          </p>

          {/* Disclaimer of Warranties */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Disclaimer of Warranties
          </h2>

          <p className="mb-10">
            All information on A7satta King is provided on an "as is" basis. We
            do not guarantee the accuracy, reliability, or completeness of any
            content available on the Site.
          </p>

          {/* Limitation of Liability */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Limitation of Liability
          </h2>

          <p className="mb-10">
            A7satta King, including its team and affiliates, will not be held
            responsible for any direct or indirect damages resulting from the
            use or inability to use the Site.
          </p>

          {/* Governing Law */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Governing Law
          </h2>

          <p className="mb-10">
            These Terms shall be governed and interpreted in accordance with
            applicable laws. Any disputes will be subject to the jurisdiction of
            the relevant courts.
          </p>

          {/* Contact Information */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Contact Information
          </h2>

          <p className="mb-10">
            If you have any questions regarding these Terms and Conditions, you
            can contact us at{" "}
            <a href="mailto:mail@a7satta.com" className="underline">
              mail@a7satta.com
            </a>
            .
          </p>

          {/* Conclusion */}
          <h2 className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem] font-bold">
            Conclusion
          </h2>

          <p className="mb-4">
            By continuing to use A7satta King, you acknowledge that you have
            read and agreed to these Terms and Conditions. We recommend checking
            this page regularly for updates.
          </p>
        </div>
      </div>
    </>
  );
}
