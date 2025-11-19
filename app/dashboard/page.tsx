
import DashboardClient from "./DashboardClient";


export default async function Dashboard() {
  const res = await fetch(`/api/sales`, {
    cache: "no-store",
  });
 const data = await res.json();
console.log("got data")
console.log(data)


// Filter when year changes



  return (
    <div className="bg-amber-100 w-full ">
     <DashboardClient data={data}/>
    </div>
  );
}
