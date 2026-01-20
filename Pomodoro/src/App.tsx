
import { TimerIcon,HouseIcon } from 'lucide-react';
import './App.css'

export function App() {
  return(
    <> 
    <div className="bg-gray-900 text-white min-h-screen">
      <header className=' py-10 justify-center flex  flex-col items-center font-bold text-2xl'>
      Olá mundo, este é o header do meu app!
    <div className=' flex flex-row justify-center items-center  '>
    
      <div className='p-10'>
        <TimerIcon className='bg-[#4de7b7] text-gray-900 w-8 h-8 border  rounded-lg  hover:bg-[#0b8a60] transition'/>
      </div>

      <div className='p-10'>
        <HouseIcon className='bg-[#4de7b7] text-gray-900 w-8 h-8 border  rounded-lg  hover:bg-[#0b8a60] transition'/>
      </div>
      
      
    </div>
    
    </header>
    <div className="py-5 px-2">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, molestiae debitis. Illum magnam optio pariatur quas, mollitia velit saepe laborum omnis libero? Ducimus temporibus distinctio totam qui, odio cumque animi.
    </div>
    </div>
    </>
  );
}

