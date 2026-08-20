import mongoose, { Schema, Model, Document } from "mongoose";

export interface IKhaiwalDocument extends Document {
    name: string;
    data: string;
    whatsappNumber: string;
    telegramLink: string;
    order: number;
    isActive: boolean;
}

const KhaiwalSchema = new Schema<IKhaiwalDocument>(
    {
        name: {
            type: String,
            required: true,
            index: true,
        },

        data: {
            type: String,
            required: true,
            index: true,
        },

        whatsappNumber: {
            type: String,
            trim: true,
        },
        telegramLink: {
            type: String,
            trim: true,
        },
        order:{
            type: Number,
            default: 0,
            trim: true,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);


export default (mongoose.models.Khaiwal as Model<IKhaiwalDocument>) ||
    mongoose.model<IKhaiwalDocument>("Khaiwal", KhaiwalSchema);