import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
<h1 className="text-3xl font-bold">Avocado Sales Dashboard</h1>
<Link
href="/dashboard"
className="px-4 py-2 bg-neutral-600 text-white font-bold rounded"
>
Go to Dashboard
</Link>
</div>
  );
}
