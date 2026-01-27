import React from "react";
import "../App.css";

type DefaultInputProps  = 
{
    id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id,type }: DefaultInputProps){
 return(
    <>
    <div className='flex flex-col justify-center items-center mt-6'>
       <label htmlFor={id}>task</label>
       <input type={type} id={id} />
    </div>
    </>
 )
}