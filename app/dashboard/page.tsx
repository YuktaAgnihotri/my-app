export const dynamic = "force-dynamic";
import DashboardClient from "./DashboardClient";




export default async function Dashboard() {
  const base = process.env.NEXT_PUBLIC_URL?.replace(/\/$/, "");

  if (!base) {
    console.error("❌ NEXT_PUBLIC_URL missing");
    return <div>Error: Missing environment variable</div>;
  }

  console.log("BASE", base);
console.log("URL", `${base}/api/sales`);

 const url = base.replace(/\/$/, "") + "/api/sales";

  console.log("Fetching:", url);

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    console.error("❌ Error status:", res.status);
    return <div>Error loading data.</div>;
  }

  const data = await res.json();
  console.log("got data", data.length);
  

  return (
    <div className="bg-amber-100 w-full ">
    
     <DashboardClient data={data}/>
    </div>
  );
}
