'use client';

import{
BarChart,
Bar,
LineChart,
Line,
PieChart,
Pie,
Cell,
XAxis,
YAxis,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";


interface Props {
data: any[];
type: string;
}


export default function ChartRenderer({ data, type }: Props) {
if (!data || data.length === 0) return <p>No data found</p>;


if (type === "bar")
return (
<ResponsiveContainer width="100%" height={400}>
<BarChart data={data}>
<XAxis dataKey="Date" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="AveragePrice" fill="#4ade80" />
</BarChart>
</ResponsiveContainer>
);


if (type === "line")
return (
<ResponsiveContainer width="100%" height={400}>
<LineChart data={data}>
<XAxis dataKey="Date" />
<YAxis />
<Tooltip />
<Legend />
<Line dataKey="AveragePrice" stroke="#22c55e" />
</LineChart>
</ResponsiveContainer>
);


if (type === "pie")
return (
<ResponsiveContainer width="100%" height={400}>
<PieChart>
<Pie
data={data}
dataKey="AveragePrice"
nameKey="Date"
outerRadius={150}
label
>
{data.map((_, index) => (
<Cell key={index} fill={"#4ade80"} />
))}
</Pie>
<Tooltip />
</PieChart>
</ResponsiveContainer>
);


return null;
}