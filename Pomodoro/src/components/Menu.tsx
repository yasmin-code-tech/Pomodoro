import React from "react";
import "../App.css";
import { HouseIcon, TimerResetIcon,SettingsIcon, SunIcon} from "lucide-react";




export function Menu(){

    return (
        <>
        <nav className='flex flex-row justify-center items-center gap-8 mt-4 py-5'>
            <a href="#">
                <button className="px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500
                to-purple-500 hover:brightness-90 flex flex-row justify-center items-center gap-2">
                    <HouseIcon className="text-gray-900"></HouseIcon>
                </button>
                
            </a>
            <a href="">
                <button className="px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500
                to-purple-500 hover:brightness-90 flex flex-row justify-center items-center gap-2">
                    <TimerResetIcon className="text-gray-900"></TimerResetIcon>
                </button>
            </a>
            <a href="">
                <button className="px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500
                to-purple-500 hover:brightness-90 flex flex-row justify-center items-center gap-2">
                    <SettingsIcon className="text-gray-900"/>
                </button>
            </a>
            <a href="">
                <button className='px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500
                hover:brightness-90 flex flex-row justify-center items-center gap-2'>
                    <SunIcon className="text-gray-900"/>
                </button>
            </a>
        </nav>
        </>
    )
}