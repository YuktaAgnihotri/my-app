import { NextResponse } from "next/server";
import { parseCsv } from "./parseCsv";

export const runtime = "edge"; // or "nodejs" – both okay

export async function GET() {
  try {
    console.log("📌 API called");

    const csvUrl = `${process.env.NEXT_PUBLIC_URL}/kaggle-dataset/avocado.csv`;

    console.log("📌 Fetching:", csvUrl);

    const res = await fetch(csvUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch CSV. Status: ${res.status}`);
    }

    const csvText = await res.text();

    const jsonData = await parseCsv(csvText);

    return NextResponse.json(jsonData);
  } catch (err: any) {
    console.error("❌ API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}



{/*
export async function GET() {
  try {
    const base = process.env.NEXT_PUBLIC_URL;
    if (!base) {
      return new Response("Missing NEXT_PUBLIC_URL", { status: 500 });
    }

    const csvUrl = `${base.replace(/\/$/, "")}/kaggle-dataset/avocado.csv`;

    return new Response(
      `API Loaded\nBase: ${base}\nCSV URL: ${csvUrl}\nNow fetching...`
    );
  } catch (e: any) {
    return new Response("ERROR: " + e.message, { status: 500 });
  }
}
*/}