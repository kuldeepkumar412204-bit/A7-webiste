import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/app/lib/mongodb";
import Khaiwal from "@/app/models/Khaiwal";

interface RouteParams {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(
    req: NextRequest,
    { params }: RouteParams
) {
    try {
        await connectDB();

        const { id } = await params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid khaiwal ID",
                },
                { status: 400 }
            );
        }

        const khaiwal = await Khaiwal.findById(id).lean();

        if (!khaiwal) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Khaiwal not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: khaiwal,
        });
    } catch (error: any) {
        console.error("[/api/khaiwal/:id] GET error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch khaiwal",
            },
            { status: 500 }
        );
    }
}

export async function PUT(
    req: NextRequest,
    { params }: RouteParams
) {
    try {
        await connectDB();

        const { id } = await params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid khaiwal ID",
                },
                { status: 400 }
            );
        }

        const body = await req.json();

        const update: Record<string, any> = {};

        if (body.name !== undefined) {
            if (typeof body.name !== "string" || !body.name.trim()) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Name must be a non-empty string.",
                    },
                    { status: 400 }
                );
            }

            update.name = body.name.trim();
        }

        if (body.data !== undefined) {
            if (typeof body.data !== "string" || !body.data.trim()) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Data must be a non-empty string.",
                    },
                    { status: 400 }
                );
            }

            update.data = body.data;
        }

        if (body.whatsappNumber !== undefined) {
            update.whatsappNumber = body.whatsappNumber;
        }

        if (body.telegramLink !== undefined) {
            update.telegramLink = body.telegramLink;
        }

        if (body.isActive !== undefined) {
            update.isActive = Boolean(body.isActive);
        }
        if( body.order!== undefined){
          update.order = Number(body.order);
        }

        const khaiwal = await Khaiwal.findByIdAndUpdate(
            id,
            update,
            {
                new: true,
                runValidators: true,
            }
        ).lean();

        if (!khaiwal) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Khaiwal not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: khaiwal,
        });
    } catch (error: any) {
        console.error("[/api/khaiwal/:id] PUT error:", error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to update khaiwal",
            },
            { status: 400 }
        );
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: RouteParams
) {
    try {
        await connectDB();

        const { id } = await params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid khaiwal ID",
                },
                { status: 400 }
            );
        }

        const khaiwal = await Khaiwal.findByIdAndDelete(id);

        if (!khaiwal) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Khaiwal not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Khaiwal deleted successfully",
        });
    } catch (error: any) {
        console.error("[/api/khaiwal/:id] DELETE error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to delete khaiwal",
            },
            { status: 500 }
        );
    }
}