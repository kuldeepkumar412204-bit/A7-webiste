import { ReactNode } from "react";

export interface Market {
  slug: string;
  name: string;
  seo?: {
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
      metaTitle: "Anmol Bazar Satta Results 2026 Today | A7 Satta King",
      metaDescription:
        "Get Anmol Bazar Satta Results 2026 today with live updates and full chart history. Check accurate and latest numbers.",
      metaKeywords: "Anmol Bazar Satta Result 2026, Anmol Bazar Satta Result Today, Anmol Bazar Satta King, Anmol Bazar Satta Chart 2026, Anmol Bazar Satta Live Updates, Anmol Bazar Satta History"
    },
  },

  "delhi-darbar": {
    slug: "delhi-darbar",
    name: "Delhi Darbar",
    seo: {
      metaTitle: "Delhi Darbar Satta Results 2026 Today | Result Update",
      metaDescription:
        "Check Delhi Darbar Satta Results 2026 today with instant updates and chart records. Get accurate winning numbers.",
      metaKeywords: "Delhi Darbar Satta Result 2026, Delhi Darbar Satta Result Today, Delhi Darbar Satta King Result, Delhi Darbar Satta Chart 2026, Delhi Darbar Satta Live Updates,"
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
    seo:{
      metaTitle: "Dehradun City Satta Results 2026 Today | Result Update",
      metaDescription:"Get Dehradun City Satta Results 2026 today with live updates and full chart history. Stay updated with results.",
      metaKeywords: "Dehradun City Satta King, Dehradun Satta Result 2026, Dehradun Chart, Satta King Dehradun Today, Dehradun Game Result, Dehradun Bazaar Result, Satta King Uttarakhand, Dehradun Number Chart"
    }
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
  "delhi-savera": {
    slug: "delhi-savera",
    name: "Delhi Savera",
    seo: {
      metaTitle: "Delhi Savera Satta Result 2026 | Latest Result Today",
      metaDescription:
        "Get accurate Delhi Savera Satta Result 2026 with fast daily updates. Check today’s reliable results along with charts and previous records.",
      metaKeywords: "delhi savera satta result, delhi savera result today, delhi savera satta king, delhi savera chart, satta result delhi savera"
    },
  },
  "lakshmi-bajar": {
    slug: "lakshmi-bajar",
    name: "Lakshmi Bajar",
    seo: {
      metaTitle: "Lakshmi Bajar Satta Result 2026 | Today Result Update",
      metaDescription:
        "Get accurate Lakshmi Bajar Satta Result 2026 with fast daily updates. Check today’s results, charts, and previous records easily.",
      metaKeywords: "lakshmi bajar satta result, lakshmi bajar result today, lakshmi bajar satta king, lakshmi bajar chart, satta result lakshmi bajar"
    },
  },
  "jaipur-matka":{
    slug: "jaipur-matka",
    name: "Jaipur Matka",
    seo: {
      metaTitle: "Jaipur Matka Satta Result 2026 | Jaipur Matka Result Today",
      metaDescription:
        "Get daily Jaipur Matka Satta Result 2026 with accurate updates. Check Jaipur Matka result today, charts, and historical data instantly.",
      metaKeywords: "jaipur matka satta result, jaipur matka result today, jaipur matka satta king, jaipur matka chart, satta result jaipur matka"
    },
  },
  "agra-city":{
    slug: "agra-city",
    name: "Agra City",
    seo:{
      metaTitle : "Agra City Satta Result 2026 | Agra City Result Today",
      metaDescription:"Stay updated with Agra City Satta Result 2026. Get fast Agra City result today, charts, and previous records with accurate information.",
      metaKeywords: "agra city satta result, agra city result today, agra city satta king, agra city chart, satta result agra city"
    }
  },
  "ajmer":{
    slug:"ajmer",
    name: "Ajmer",
    seo:{
      metaTitle: "Ajmer Satta Result 2026 | Today Ajmer Result Update",
      metaDescription: "Get accurate Ajmer Satta Result 2026 with fast daily updates. Check today’s Ajmer results, charts, and previous records easily.",
      metaKeywords:"ajmer satta result, ajmer result today, ajmer satta king, ajmer chart, satta result ajmer"
    }
  },
  "dwarka-city":{
    slug:"dwarka-city",
    name: "Dwarka City",
    seo:{
      metaTitle:"Dwarka City Satta Result 2026 | Today Dwarka City Result",
      metaDescription: "Get accurate Dwarka City Satta Result 2026 with quick daily updates. Check today’s Dwarka City results, charts, and previous records.",
      metaKeywords: "dwarka city satta result, dwarka city result today, dwarka city satta king, dwarka city chart, satta result dwarka city"
    }
  }

};