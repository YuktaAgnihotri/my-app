'use client';

interface Props {
graph: string;
onChange: (value: string) => void;
}


export default function ChartSelector({ graph, onChange }: Props) {
return (
<select
className="border px-3 py-2 rounded"
value={graph}
onChange={(e) => onChange(e.target.value)}
>
<option value="bar">Bar Chart</option>
<option value="line">Line Chart</option>
<option value="pie">Pie Chart</option>
</select>
);
}