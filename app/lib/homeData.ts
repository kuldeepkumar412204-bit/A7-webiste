// Server-side data loaders for the home page (SSR for SEO).
// Each loader returns the same JSON shape as its API route, or undefined on
// failure so the client components fall back to fetching it themselves.

import { cache } from "react";
import mongoose from "mongoose";
import { connectDB } from "@/app/lib/mongodb";
import Satta from "@/app/models/Satta";
import Khaiwal from "@/app/models/Khaiwal";
import Contact from "@/app/models/Contact";
import {
  getSortedActiveGames,
  buildDailyData,
  buildMonthlyData,
} from "@/app/lib/marketData";
import type { ContactData } from "@/app/lib/contact";
import type { MonthlyGameRow } from "@/app/(public)/Components/Home/WeeklyResultsSection";

// One games query per request, shared by the daily + monthly loaders
const getGames = cache(getSortedActiveGames);

// Mongo docs (ObjectId, Date) -> plain JSON, exactly like the API response
const toPlain = (value: unknown) => JSON.parse(JSON.stringify(value));

async function safe<R>(label: string, fn: () => Promise<unknown>): Promise<R | undefined> {
  try {
    return toPlain(await fn());
  } catch (error) {
    console.error(`[home SSR] ${label} error:`, error);
    return undefined;
  }
}

// GET /api/data?range=daily
export const getDailyData = () =>
  safe<any[]>("daily", async () => {
    const { sortedGames } = await getGames();
    return buildDailyData(sortedGames);
  });

// GET /api/data?range=monthly
export const getMonthlyData = () =>
  safe<MonthlyGameRow[]>("monthly", async () => {
    const { sortedGames } = await getGames();
    return buildMonthlyData(sortedGames);
  });

// GET /api/satta
export const getSattaGames = () =>
  safe<any[]>("satta", async () => {
    await connectDB();
    return Satta.find({}).sort({ createdAt: -1 }).lean();
  });

// GET /api/khaiwal
export const getKhaiwals = () =>
  safe<any[]>("khaiwal", async () => {
    await connectDB();
    return Khaiwal.find({}).sort({ createdAt: -1 }).lean();
  });

// GET /api/contact/[id]
export const getContact = (id: string) =>
  safe<ContactData>("contact", async () => {
    await connectDB();
    const query = mongoose.isValidObjectId(id)
      ? { $or: [{ _id: id }, { referenceId: id }] }
      : { referenceId: id };
    const contact = await Contact.findOne(query).lean();
    if (!contact) throw new Error(`Contact ${id} not found`);
    return contact;
  });
