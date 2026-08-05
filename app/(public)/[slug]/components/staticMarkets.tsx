import { ReactNode } from "react";

export interface Market {
  slug: string;
  name: string;
  seo?:{
    metaTitle: string;
    metaDescription: string;
    metaKeywords?: string;
  }
  resultTime?: string;
  sections?: {
    heading: string;
    description: ReactNode | string;
  }[];
  faqs?: {
    question: string;
    answer: ReactNode | string;
  }[];
}

export const staticMarkets: Record<string, Market> = {
  "hr-satta": {
    slug: "hr-satta",
    name: "HR Satta",
    seo: {
      metaTitle: "HR Satta Results 2026 Today | Live Result & Chart",
      metaDescription:
        "Check HR Satta Results 2026 today with live updates, fast result timing, and complete chart history. Get accurate and latest numbers.",
    },
  },

  "kkr-city": {
    slug: "kkr-city",
    name: "KKR City",
    seo: {
      metaTitle: "KKR City Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Get KKR City Satta Results 2026 today with live updates and full chart history. Stay updated with accurate and fast results.",
    },
  },

  "ujjala-super": {
    slug: "ujjala-super",
    name: "Ujjala Super",
    seo: {
      metaTitle: "Ujjala Super Satta Results 2026 Today | Chart",
      metaDescription:
        "Check Ujjala Super Satta Results 2026 today with real-time updates and full chart history. Get latest and accurate results.",
    },
  },

  "karol-bagh": {
    slug: "karol-bagh",
    name: "Karol Bagh",
    seo: {
      metaTitle: "Karol Bagh Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Find Karol Bagh Satta Results 2026 today with live updates and chart records. Get accurate and timely result information.",
    },
  },

  "sky-king": {
    slug: "sky-king",
    name: "Sky King",
    seo: {
      metaTitle: "Sky King Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Check Sky King Satta Results 2026 today with real-time updates and full chart history. Stay updated with fast results.",
    },
  },

  "anmol-bazar": {
    slug: "anmol-bazar",
    name: "Anmol Bazar",
    seo: {
      metaTitle: "Anmol Bazar Satta Results 2026 Today | Chart",
      metaDescription:
        "Get Anmol Bazar Satta Results 2026 today with live updates and full chart history. Check accurate and latest numbers.",
    },
  },

  "delhi-darbar": {
    slug: "delhi-darbar",
    name: "Delhi Darbar",
    seo: {
      metaTitle: "Delhi Darbar Satta Results 2026 Today | Chart",
      metaDescription:
        "Check Delhi Darbar Satta Results 2026 today with instant updates and chart records. Get accurate winning numbers.",
    },
  },

  "new-ganga": {
    slug: "new-ganga",
    name: "New Ganga",
    seo: {
      metaTitle: "New Ganga Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Find New Ganga Satta Results 2026 today with real-time updates and full chart history. Stay updated with latest results.",
    },
  },

  "fatehabad": {
    slug: "fatehabad",
    name: "Fatehabad",
    seo: {
      metaTitle: "Fatehabad Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Check Fatehabad Satta Results 2026 today with fast updates and detailed chart history. Get accurate results.",
    },
  },

  "raj-shree": {
    slug: "raj-shree",
    name: "Raj Shree",
    seo: {
      metaTitle: "Raj Shree Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Get Raj Shree Satta Results 2026 today with live updates and chart records. Stay updated with accurate numbers.",
    },
  },

  "udaipur-city": {
    slug: "udaipur-city",
    name: "Udaipur City",
    seo: {
      metaTitle: "Udaipur City Satta Results 2026 Today | Chart",
      metaDescription:
        "Check Udaipur City Satta Results 2026 today with instant updates and full chart history. Get fast and accurate results.",
    },
  },

  "vip-agra": {
    slug: "vip-agra",
    name: "VIP Agra",
    seo: {
      metaTitle: "VIP Agra Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Find VIP Agra Satta Results 2026 today with live updates and chart data. Stay updated with latest winning numbers.",
    },
  },

  "mandi-bazar": {
    slug: "mandi-bazar",
    name: "Mandi Bazar",
    seo: {
      metaTitle: "Mandi Bazar Satta Results 2026 Today | Chart",
      metaDescription:
        "Check Mandi Bazar Satta Results 2026 today with real-time updates and full chart history. Get accurate results.",
    },
  },

  "sialkot": {
    slug: "sialkot",
    name: "Sialkot",
    seo: {
      metaTitle: "Sialkot Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Get Sialkot Satta Results 2026 today with instant updates and chart records. Stay updated with latest numbers.",
    },
  },

  "bhadra-bazar": {
    slug: "bhadra-bazar",
    name: "Bhadra Bazar",
    seo: {
      metaTitle: "Bhadra Bazar Satta Results 2026 Today | Chart",
      metaDescription:
        "Check Bhadra Bazar Satta Results 2026 today with live updates and chart history. Get accurate winning numbers.",
    },
  },

  "lion-bazar": {
    slug: "lion-bazar",
    name: "Lion Bazar",
    seo: {
      metaTitle: "Lion Bazar Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Find Lion Bazar Satta Results 2026 today with fast updates and full chart history. Stay updated with results.",
    },
  },

  "mohali-7": {
    slug: "mohali-7",
    name: "Mohali 7",
    seo: {
      metaTitle: "Mohali 7 Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Check Mohali 7 Satta Results 2026 today with instant updates and chart records. Get accurate latest results.",
    },
  },

  "dehradun-city": {
    slug: "dehradun-city",
    name: "Dehradun City",
    seo: {
      metaTitle: "Dehradun City Satta Results 2026 Today | Chart",
      metaDescription:
        "Get Dehradun City Satta Results 2026 today with live updates and full chart history. Stay updated with results.",
    },
  },

  "daman": {
    slug: "daman",
    name: "Daman",
    seo: {
      metaTitle: "Daman Satta Results 2026 Today | Live Chart",
      metaDescription:
        "Check Daman Satta Results 2026 today with real-time updates and full chart history. Get fast and accurate results.",
    },
  },

};