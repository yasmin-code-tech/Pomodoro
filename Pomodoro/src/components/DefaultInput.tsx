import React from "react";
import "../App.css";

type DefaultInputProps  = 
{
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps){
 return(
    <>
    <div className='flex flex-col justify-center items-center mt-6'>
       {
        labelText && <label htmlFor={id} className='text-[16px]'>{labelText}</label>
       }
       
       <input type={type} id={id} {...rest}
       className='w-full
         border-0
         border-b-2
         border-indigo-500
         bg-transparent
         focus:outline-none
         focus:border-indigo-500
         transition-colors
         mb-16
         mt-4
         flex
         items-center
         justify-center
         italic
         text-center
         '/>
    </div>
    </>
 )
}