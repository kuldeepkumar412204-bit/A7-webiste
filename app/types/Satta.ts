export interface ISatta {
  _id: string;
  name: string;
  slug: string;
  isActive: boolean;
  resultTime: string; // "HH:MM" 24-hour format stored in DB
  createdAt: string;
  updatedAt: string;
  tableNo: number;
  order: number | undefined;
  source: "API" | "MANUAL";
  apiName?: string;
}