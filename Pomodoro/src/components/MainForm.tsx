import {DefaultInput} from './DefaultInput.tsx' 
export function MainForm(){
    
    return (
        <>
        <form action="">

            <div>
                <DefaultInput
                labelText='task'
                id='meuInput'
                type='text'
                placeholder='Digite algo'
                />
            </div>
        </form>
        
        </>
    )
}