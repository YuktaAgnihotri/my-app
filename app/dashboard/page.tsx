

import DashboardClient from "./DashboardClient";
export const dynamic = "force-dynamic"; 
export const runtime = "edge";

export default async function Dashboard() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sales` , {
    cache: "no-store",
  });
 const data = await res.json();
console.log("got data")

  return (
    <div className="bg-amber-100 w-full ">
    
     <DashboardClient data={data}/>
    </div>
  );
}
