import mongoose, { Schema, Model, Document } from "mongoose";

export interface IResultDocument extends Document {
  sattaId: mongoose.Types.ObjectId;
  drawDate: Date; // Normalized UTC Date (midnight YYYY-MM-DD)
  result: string; // Declared outcome string (e.g. "90", "74")
  source: "API" | "MANUAL";
  status: "draft" | "published";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ResultSchema = new Schema<IResultDocument>(
  {
    sattaId: {
      type: Schema.Types.ObjectId,
      ref: "Satta",
      required: true,
      index: true,
    },
    drawDate: {
      type: Date,
      required: true,
      index: true,
    },
    result: {
      type: String,
      required: true,
      trim: true,
    },
    source: {
      type: String,
      enum: ["API", "MANUAL"],
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Ensures maximum of one result document per game per date
ResultSchema.index({ sattaId: 1, drawDate: 1 }, { unique: true });

export default (mongoose.models.Result as Model<IResultDocument>) ||
  mongoose.model<IResultDocument>("Result", ResultSchema);