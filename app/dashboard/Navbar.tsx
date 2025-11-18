import Link from "next/link";
import { useState } from "react";



const  Navbar = ()=> { 
     
    const[show, setshow] = useState('bar') 
    const handleshow = () =>{
           if(show === 'bar'){
            
           }
    }
    return(<>
    <div className=" flex  justify-center"> 
        <button
         className="bg-black rounded-xl text-white p-4 ml-10"
         onClick={()=>{
           setshow('bar')
           handleshow()
         }}>
            <Link href={'/components'}></Link> BarGraph </button>
        <button className="bg-black rounded-xl text-white p-4 ml-10"> pieChart</button>
        <button className="bg-black rounded-xl text-white p-4 ml-10">LineChart </button></div>
       
        </>)
    
}

export default Navbar;