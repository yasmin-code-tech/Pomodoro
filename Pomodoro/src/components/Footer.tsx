
export function Footer(){
    return (
        <>
        <footer className='  bg-foreground dark:bg-background flex flex-col justify-center items-center font-light text-sm mt-24 gap-1.5 dark:text-foreground text-background'>
            <a href="#" className='no-underline hover:underline'>Entenda como funciona a técnica pomodoro 🍅 </a>
            <a href="#" className='no-underline hover:underline'>Pomodoro Timer &copy; {new Date().getFullYear()} - Feito com ❤️ </a>
        </footer>
        </>
    )
}