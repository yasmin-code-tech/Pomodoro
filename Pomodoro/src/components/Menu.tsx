
import "../App.css";
import { HouseIcon, TimerResetIcon,SettingsIcon, Sun, Moon} from "lucide-react";
import {useState,useEffect} from 'react';




export function Menu(){
    
    // const handleThemeChange = () => {
    //     const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    //     document.documentElement.classList.toggle("dark");
    //     localStorage.setItem("theme", currentTheme);
    // }

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme === "dark"){
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    const handleThemeChange = () => {
        const nextTheme = !isDark;
        
        setIsDark(nextTheme);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", nextTheme ? "dark": "light")
    }
    

    return (
        <>
        <nav className='flex flex-row justify-center items-center gap-4 py-1'>
            <a href="#">
                <button className="px-4 py-4 rounded-xl bg-linear-to-r from-indigo-500
                to-purple-500 hover:brightness-90 flex flex-row justify-center items-center gap-2" title="Ir para a home" aria-label="Ir para a home">
                    <HouseIcon className="text-background dark:text-foreground"></HouseIcon>
                </button>
                
            </a>
            <a href="">
                <button className="px-4 py-4 rounded-xl bg-linear-to-r from-indigo-500
                to-purple-500 hover:brightness-90 flex flex-row justify-center items-center gap-2" title='Histórico' aria-label='Histórico'>
                    <TimerResetIcon className="text-background dark:text-foreground"></TimerResetIcon>
                </button>
            </a>
            <a href="">
                <button className="px-4 py-4 rounded-xl bg-linear-to-r from-indigo-500
                to-purple-500 hover:brightness-90 flex flex-row justify-center items-center gap-2" title="Configurações" aria-label='Configurações'>
                    <SettingsIcon className="text-background dark:text-foreground"/>
                </button>
            </a>
            <a href="#" onClick={handleThemeChange} >
                <button className='px-4 py-4 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500
                hover:brightness-90 flex flex-row justify-center items-center gap-2 dark:bg-foreground dark:text-background' title="Alternar tema" aria-label="Alternar tema"
                >
                {isDark ? (<Moon className="text-foreground"/>) : (<Sun className="text-background"/>)}        

                </button>
            </a>
        </nav>
        </>
    )
}