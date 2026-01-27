//styles
import './App.css'

//components
import {Logo} from './components/Logo';
import {Menu} from './components/Menu';
import {CountDown} from './components/CountDown';
import {DefaultInput} from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';

//icons
import {PlayCircleIcon} from 'lucide-react';



export function App() {


  
  
  return(
    <> 
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center flex-col">
      
      <header className=' py-10 justify-center flex flex-col items-center font-bold text-2xl'>
      <Logo/>
      <Menu/>
    
    </header>
    

    <CountDown/>

    <DefaultInput labelText='Tarefa' id='task' type='text' title='MeuTitulo' placeholder='Digite algo...'
    />
    <Cycles/>
    <DefaultButton icon={<PlayCircleIcon/>}/>
    

    </div>
    </>
  );
}

