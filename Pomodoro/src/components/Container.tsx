
type ContainerProps ={
    children: React.ReactNode
}

export function Container({children}: ContainerProps){
    return(
        <>
        <div className='flex justify-center items-center   '>
            {children}
        </div>
        </>
    );
}