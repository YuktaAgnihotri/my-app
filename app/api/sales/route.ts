import { NextResponse } from "next/server";
import { parseCsv } from "@/app/utils/data/parseCsv";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public/kaggle-dataset/avocado.csv");
  const csvFile = fs.readFileSync(filePath, "utf-8");
        console.log("files laoded");
  const jsonData = await parseCsv(csvFile);
 console.log("file converterd too json")
  return NextResponse.json(jsonData);
}
