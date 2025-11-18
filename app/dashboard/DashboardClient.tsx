"use client";

import { useState, useMemo } from "react";
import YearButtons from "../components/YearButton";
import ChartSelector from "../components/ChartSelector";
import ChartRenderer from "./ChartRender";
import {LayoutDashboard} from 'lucide-react'
import PriceFilter from "./PriceFilter";

interface DashboardClientProps {
  data: any[];
}

export default function DashboardClient({ data }: DashboardClientProps) {
  const [year, setYear] = useState(2015);
  const [graph, setGraph] = useState("bar");

  // Filter CSV rows whenever year changes
  const filteredData = useMemo(() => {
    if (!data) return [];

    const filtered = data.filter((row: any) =>
      row.Date?.startsWith(String(year))
    );

    // Sort by date ASC
    return filtered.sort(
      (a: any, b: any) => new Date(a.Date).getTime() - new Date(b.Date).getTime()
    );
  }, [year, data]);

  return (
    <div className="flex flex-col gap-6 bg-am">
     
       <span> <LayoutDashboard size={100} color="blue" />  </span>  
     <h1  className="text-3xl font-bold  top-0">Avocado Sales Dashboard </h1>

      {/* Year Selection Buttons */}
      <YearButtons selectedYear={year} onchange={setYear} />

      {/* Dropdown for graph type */}
      <ChartSelector graph={graph} onChange={setGraph} />

      {/* Render Recharts visual */}
      <ChartRenderer type={graph} data={filteredData} />

      <PriceFilter data={data} />
    </div>
  );
}
