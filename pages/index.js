
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
export default function Home() {
  const [expandibleMenu, setExpandibleMenu] = useState(false)
  useEffect(() => {
    console.log(expandibleMenu)
  }, [expandibleMenu])
  
  return (
    <div>
      <nav className='flex flex-row justify-between bg-gradient-to-r from-indigo-800 to-blue-500 py-4'>
        <div className=' text-white flex gap-2 mx-2 justify-start align-middle items-center w-2/6 py-2'>
          <MenuIcon className=' cursor-pointer' onClick={()=>setExpandibleMenu(!expandibleMenu)}/>
          <h1 className='text-xl font-bold'>FOROESCOM</h1>
        </div>
        <div className=' text-white flex gap-2 mx-2 justify-end align-middle items-center w-3/6 py-2'>
          <div className='flex bg-gray-200 w-2/3 text-black rounded-3xl px-2 py-1'><SearchIcon/><input className=' ml-2 bg-transparent w-11/12 outline-none' placeholder='BUSCAR'/></div>
          <NotificationsIcon/>
          <PersonIcon/>
        </div>
      </nav>
      
    </div>
  )
}
