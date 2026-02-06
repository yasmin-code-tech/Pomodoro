
import "../App.css";
import { TimerIcon } from 'lucide-react';


export function Logo(){
return(
    <>
    <div className='flex flex-col justify-center items-center gap-2  py-12 ' >
        <TimerIcon 
        className = 'text-indigo-400 w-18 h-18 font-bold '/>
        <span className='text-5xl py-1 text-indigo-400 font-extrabold'>
            Pomodoro Timer
        </span>
        <span className='text-xl text-indigo-300 font-md  '>
            Gerencie seu foco
        </span>
    </div>
    </>
)
}
