import mongoose, { Schema, Model, Document } from "mongoose";

export interface ISattaDocument extends Document {
  name: string;
  slug: string;
  resultTime: string; // "HH:MM" 24-hr format
  source: "API" | "MANUAL";
  apiName?: string; // Maps to external API name field (e.g., "DISAWER", "KAROL BAGH")
  isActive: boolean;
  tableNo: number;
  order: number;
}

const SattaSchema = new Schema<ISattaDocument>(
    {
    name: { type: String, required: true, trim: true, unique: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    resultTime: { type: String, required: true, match: /^([01]\d|2[0-3]):([0-5]\d)$/ },
    source: { type: String, enum: ["API", "MANUAL"], default: "MANUAL", required: true },
    apiName: { type: String, trim: true, default: null },
    isActive: { type: Boolean, default: true },
    tableNo: { type: Number, enum: [1, 2] },
    order: { type: Number },
  },
  {
    timestamps: true,
  }
);

export default (mongoose.models.Satta as Model<ISattaDocument>) ||
  mongoose.model<ISattaDocument>("Satta", SattaSchema);