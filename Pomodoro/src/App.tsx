
import { PlayIcon} from 'lucide-react';
import './App.css'
import {useState} from 'react';
import {Logo} from './components/Logo';
import {Menu} from './components/Menu';
import {CountDown} from './components/CountDown';
import {DefaultInput} from './components/DefaultInput';



export function App() {


  
  
  return(
    <> 
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center flex-col">
      
      <header className=' py-10 justify-center flex flex-col items-center font-bold text-2xl'>
      <Logo/>
      <Menu/>
    
    </header>
    

    <CountDown/>

    <DefaultInput type='text'/>

    

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

