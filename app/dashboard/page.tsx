export const dynamic = "force-dynamic";
import DashboardClient from "./DashboardClient";




export default async function Dashboard() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sales`, {
  cache: "no-store",
}).then((res) => res.json());
  
 
console.log("got data")

  return (
    <div className="bg-amber-100 w-full ">
    
     <DashboardClient data={data}/>
    </div>
  );
}
