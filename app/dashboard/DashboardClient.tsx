"use client";

import { useState, useMemo,useEffect } from "react";
import YearButtons from "../components/YearButton";
import ChartSelector from "../components/ChartSelector";
import ChartRenderer from "./ChartRender";


import PriceFilter from "./PriceFilter";

interface DashboardClientProps {
  data: any[];
}

export default function DashboardClient({ data }: DashboardClientProps) {
  const [year, setYear] = useState(2015);
  const [graph, setGraph] = useState("bar");

  // Filter CSV rows whenever year changes
  const filteredData = useMemo(() => {
    console.log('here in dashboard client with data length' , data.length)

    if (!data) return [];
    const filtered = data.filter((row: any) =>
      String(row.Date).replace(/\s/g, "").startsWith(String(year))
    );

    // Sort by date ASC
    return filtered.sort(
      (a: any, b: any) => new Date(a.Date).getTime() - new Date(b.Date).getTime()
    );
  }, [year, data]);

  console.log(" Objects key",Object.keys(data[0]));

   useEffect(() => {
  data.forEach((row, index) => {
    console.log("Row", index, row.Date, row.Year);
  });
}, [data]);

console.log("Incoming data length: ", data.length);

useEffect(() => {
  console.log("Sample row structure: after fix", data[0]);
  console.log("date", data[0].Date)
}, [data]);


 console.log("filterd data accorinf to date")
  return (
    <div className="flex flex-col gap-6 bg-am">
     <h1  className="text-4xl lg:text-5xl  font-bold text-center  top-0">Avocado Sales Dashboard </h1>

      {/* Year Selection Buttons */}
      <div className="flex  justify-center">
        <YearButtons   selectedYear={year} onchange={setYear} />
      </div>
      

      {/* Dropdown for graph type */}
      <ChartSelector graph={graph} onChange={setGraph} />

      {/* Render Recharts visual */}
      <ChartRenderer type={graph} data={filteredData} />

      <PriceFilter data={data} />
    </div>
  );
}
