import React from "react";
import "../App.css";

type DefaultButtonProps  = 
{
    icon: React.ReactNode;
    variant: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, variant='green', className='', ...props }: DefaultButtonProps){
    
    const baseClasses='px-32 py-4 rounded-md text-gray-900 cursor-pointer transition-colors'

    const variantClasses = {
        green: 'bg-green-500 hover:bg-green-600 text-gray-900',
        red: 'bg-red-500 hover:bg-red-600 text-gray-900'
    }

    return(
    <>
    <div className='mt-16'>
       <button  {...props}
       className={`${baseClasses} ${variantClasses[variant] } ${className}`}>
        {icon}
       </button>
    </div>
    </>
 )
}