import React from "react";
import "../App.css";



export function CountDown(){
 return(
    <>
    <div className=' mt-8 flex dark:text-foreground text-background justify-center items-center text-[clamp(2rem,5vw,6rem)]  gap-4 border-2 border-gray-500 hover:border-gray-600 rounded-full px-4 py-14'>
        00:00
    </div>
    </>
 )
}