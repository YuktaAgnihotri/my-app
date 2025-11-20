export const dynamic = "force-dynamic";
import DashboardClient from "./DashboardClient";




export default async function Dashboard() {
  const base = process.env.NEXT_PUBLIC_URL?.replace(/\/$/, "");

  const data = await fetch(`${base}/api/sales`,{
  cache: "no-store",
}).then((res) => res.json());
  
 
console.log("got data")

  return (
    <div className="bg-amber-100 w-full ">
    
     <DashboardClient data={data}/>
    </div>
  );
}
