import React from "react";
import "../App.css";
import { TimerIcon } from 'lucide-react';


export function Logo(){
return(
    <>
    <div className='flex flex-col justify-center items-center gap-2 hover:opacity-70' >
        <TimerIcon 
        className = 'text-indigo-400 w-18 h-18 font-bold hover:opacity-70'/>
        <span className='text-4xl py-1 transition hover:opacity-70 text-indigo-400'>
            Pomodoro Timer
        </span>
        <span className='text-sm text-indigo-300 font-light  '>
            Gerencie seu foco
        </span>
    </div>
    </>
)
}
