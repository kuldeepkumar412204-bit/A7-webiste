// Server-side data loaders for public pages (SSR for SEO).
// Each loader returns the same JSON shape as its API route, or undefined on
// failure so the client components fall back to fetching it themselves.

import { cache } from "react";
import mongoose from "mongoose";
import { connectDB } from "@/app/lib/mongodb";
import Satta from "@/app/models/Satta";
import Khaiwal from "@/app/models/Khaiwal";
import Contact from "@/app/models/Contact";
import Result from "@/app/models/Results";
import {
  hasResultTimePassed,
  formatTime12,
  getSortedActiveGames,
  buildDailyData,
  buildMonthlyData,
  buildYearlyData,
} from "@/app/lib/marketData";
import type { ContactData } from "@/app/lib/contact";
import type { AllYearlyDataResponse } from "@/app/lib/satta";
import type { MonthlyGameRow } from "@/app/(public)/Components/Home/WeeklyResultsSection";

// One games query per request, shared by the daily/monthly/yearly loaders
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

// GET /api/data?range=yearly&year=YYYY (full response, as the client caches it)
export const getAllYearlyData = (year: number) =>
  safe<AllYearlyDataResponse>("yearly", async () => {
    if (isNaN(year) || year < 2000 || year > 2100) throw new Error("Invalid year");
    const { games } = await getGames();
    const data = games.length === 0 ? [] : await buildYearlyData(games, year);
    return { success: true, range: "yearly", year, data };
  });

export interface LatestResult {
  result: string;
  drawDate: string; // ISO, IST date at 00:00Z
  updatedAt: string; // ISO
  time: string; // game result time, e.g. "1:40 PM"
  isToday: boolean;
}

// Most recent published result for one game. Today's result is skipped until
// its result time has passed, matching what the yearly chart shows.
export const getLatestResult = (slug: string) =>
  safe<LatestResult | null>("latest", async () => {
    await connectDB();
    const game = await Satta.findOne({ slug, isActive: true }).select("_id resultTime").lean();
    if (!game) return null;

    const todayStr = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
    const today = new Date(`${todayStr}T00:00:00.000Z`);

    const rows = await Result.find({
      sattaId: game._id,
      drawDate: { $lte: today },
      status: "published",
      isActive: true,
      // Skip placeholders like "--" so every page falls back to the last real result
      result: { $regex: /\d/ },
    })
      .sort({ drawDate: -1 })
      .limit(2)
      .select("result drawDate updatedAt")
      .lean();

    const latest = rows.find(
      (r) => r.drawDate.getTime() !== today.getTime() || hasResultTimePassed(game.resultTime)
    );
    if (!latest) return null;

    return {
      result: latest.result,
      drawDate: latest.drawDate,
      updatedAt: latest.updatedAt,
      time: formatTime12(game.resultTime),
      isToday: latest.drawDate.getTime() === today.getTime(),
    };
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
