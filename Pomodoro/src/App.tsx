
import { TimerIcon,HouseIcon, TimerResetIcon , SettingsIcon, SunIcon, PlayIcon} from 'lucide-react';
import './App.css'
import {useState} from 'react';

export function App() {
  
    const [task, setTask] = useState<string>('');

  
  
  return(
    <> 
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center flex-col">
      
      <header className=' py-10 justify-center flex flex-col items-center font-bold text-2xl'>
      <TimerIcon className='text-indigo-400 w-18 h-18'/>
      <span className='text-4xl py-1 transition hover:scale-105 text-indigo-400
      font-semibold'>Pomodoro Timer</span>
      <span className='text-sm text-indigo-300 font-medium'>Gerencie seu foco</span>
    
    <div className=' flex flex-row justify-center items-center gap-4  mt-16  '>
    
      
        <button className='px-4 py-2
  rounded-lg
  bg-gradient-to-r
  from-indigo-500
  via-blue-500
  to-cyan-500
  hover:brightness-80
  ' aria-label='Página Inicial'>
          <HouseIcon className=' text-gray-900'/>
        </button>
      

      <button className='px-4 py-2 rounded-lg bg-gradient-to-r
  from-indigo-500
  via-blue-500
  to-cyan-500
  hover:brightness-80' aria-label='Histórico'>
        <TimerResetIcon className=' text-gray-900'/>
      </button>

      <button className='px-4 py-2 rounded-lg bg-gradient-to-r
  from-indigo-500
  via-blue-500
  to-cyan-500
  hover:brightness-80' aria-label='Configurações'>
        <SettingsIcon className=' text-gray-900'/>
      </button>

      <button className='px-4 py-2 rounded-lg bg-gradient-to-r
  from-indigo-500
  via-blue-500
  to-cyan-500
  hover:brightness-80' aria-label='Mudar Tema'>
        <SunIcon className='text-gray-900'/>
      </button>
      
    </div>
    
    </header>
    

    <div>
      espaço para o timer
    </div>

    <div className="m-10 p-5 flex flex-col items-center">
      <span className='mb-2'>task:</span>
      <input type="text"
      value={task}
      onChange={(e)=> setTask(e.target.value)} 
      className='border-b
      border-indigo-400
      px-3
      py-2
      focus:ring-2
      focus:ring-indigo-600
      hover:border border-indigo-400 rounded-md 
      text-2xl'/>

      <span className='m-8'>Nesse ciclo <span className='font-semibold'>descanse</span> por <span className='font-bold'>5 minutos</span>
      
      </span>
      
    </div>

    <div>
      <span>Ciclos:</span>
    </div>

    <div className='mt-4'>
      <button className="bg-blue-500 py-2 px-20 rounded-xl hover:brightness-90">
        <PlayIcon className='w-10 h-10 text-gray-900 border-3 rounded-full py-2'/>
      </button>
    </div>
    

    </div>
    </>
  );
}

