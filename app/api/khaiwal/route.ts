import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Khaiwal from "@/app/models/Khaiwal";

export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const search = searchParams.get("search");

        const filter: Record<string, any> = {};

        if (search) {
            const tokens = search
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean);

            filter.$or = tokens.flatMap((token) => [
                {
                    name: {
                        $regex: token,
                        $options: "i",
                    },
                },
                {
                    data: {
                        $regex: token,
                        $options: "i",
                    },
                },
                {
                    whatsappNumber: {
                        $regex: token,
                        $options: "i",
                    },
                },
                {
                    telegramLink: {
                        $regex: token,
                        $options: "i",
                    },
                },
            ]);
        }

        const khaiwals = await Khaiwal.find(filter)
            .sort({ createdAt: -1 })
            .lean();

        return NextResponse.json({
            success: true,
            data: khaiwals,
        });
    } catch (error: any) {
        console.error("[/api/khaiwal] GET error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch khaiwal data",
            },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const body = await req.json();

        if (!body.name || typeof body.name !== "string") {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name is required.",
                },
                { status: 400 }
            );
        }

        if (!body.data || typeof body.data !== "string") {
            return NextResponse.json(
                {
                    success: false,
                    message: "Data is required.",
                },
                { status: 400 }
            );
        }

        const khaiwal = await Khaiwal.create({
            name: body.name,
            data: body.data,
            whatsappNumber: body.whatsappNumber,
            telegramLink: body.telegramLink,
            isActive: body.isActive ?? true,
            order: body.order ?? 0,
        });

        return NextResponse.json(
            {
                success: true,
                data: khaiwal,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("[/api/khaiwal] POST error:", error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to create khaiwal",
            },
            { status: 400 }
        );
    }
}
