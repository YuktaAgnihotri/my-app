import DashboardClient from "./DashboardClient";


export default async function Dashboard() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sales` , {
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
