'use client'
interface Props {
    selectedYear : number;
    onchange : (year : number) => void;
}

export default function YearButtons({selectedYear, onchange} : Props){
    const year = [2015  , 2017 , 2018]
    return (<>
    <div className="flex gap-3">
        <ul>
            {
                year.map((yr)=>(
                  <button key={yr}  
                  onClick={ ()=>onchange(yr)}
                    className={`px-4 py-2 rounded border ${
                    selectedYear === yr ? "bg-black text-white" : "bg-neutral-500"
                    }`}
                   >{yr} </button>
                ))
            }
        </ul> </div>
    </>)
}