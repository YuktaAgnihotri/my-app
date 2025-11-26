"use client";

import { useState, useMemo } from "react";

interface Props {
  data: any[];
}

type SalesData ={
    sales : number;
    Date : number;
    AveragePrice : number;
    region : number;
}

export default function PriceFilter({ data }: Props) {
  const [AvgPrice, setAvgPrice] = useState("");
  const [filtered, setFiltered] = useState<SalesData[]>([]);

  const handleFilter = () => {
    if (!AvgPrice.trim()) {
      setFiltered([]);
      return;
    }

    const filteredData = data.filter(item => {
      const price = Number(item.AveragePrice);
      return price === Number(AvgPrice); // EXACT MATCH
    });

    setFiltered(filteredData);
    console.log("reached inside price filter")
  };

  return (
    <div className="p-4 mt-8 border rounded bg-amber-200">
      <h2 className="text-xl font-bold mb-4">Filter by Average Price</h2>

      {/* Inputs */}
      <div className="flex gap-3 mb-4">
        <input
          type="number"
          placeholder="Avg Price"
          className="border p-2 rounded"
          value={AvgPrice}
          onChange={(e) => setAvgPrice(e.target.value)}
        />

      </div>
       <button
        className="mt-3 bg-neutral-600 text-white px-4 py-2 rounded"
        onClick={handleFilter}
      >
        Filter
      </button>

      {/* Results */}
      <h3 className="font-semibold mb-2">
        Results ({filtered.length} records)
      </h3> 

      {filtered.length === 0 && (
        <p className="text-gray-500">No matching records.</p>
      )}

      {filtered.length > 0 && (
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-2">Date</th>
              <th className="p-2">Average Price</th>
              <th className="p-2">Region in which sold</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2">{item.Date}</td>
                <td className="p-2">${item.AveragePrice}</td>
                <td className="p-2">{item.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
