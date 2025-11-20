import { NextResponse } from "next/server";
import { parseCsv } from "@/app/api/sales/parseCsv";
export const runtime = "nodejs";
import fs from "fs/promises";
import path from "path";


export interface AvocadoSale {
  Date: string;
  AveragePrice: number;
  TotalVolume: number;
  "4046": number;
  "4225": number;
  "4770": number;
  TotalBags: number;
  SmallBags: number;
  LargeBags: number;
  XLargeBags: number;
  type: string;
  year: number;
  region: string;
}


export async function GET() {
  try {
    console.log("📌 Sales API Called");
 
    const filePath = path.join(
      process.cwd(),
      "public",
      "kaggle-dataset",
      "avocado.csv"
    );

    const csvText = await fs.readFile(filePath, "utf-8");
    console.log("📌 CSV read from file:", csvText.length);

 const jsonData: AvocadoSale[] = (await parseCsv(csvText)) as AvocadoSale[];

    console.log("📌 Parsed", jsonData.length, "records");

    return NextResponse.json(jsonData);

  } catch (err: any) {
    console.error("❌ API Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
