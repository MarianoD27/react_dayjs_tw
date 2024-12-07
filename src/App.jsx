import { createContext, useEffect, useState } from 'react'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import { GiBackwardTime } from "react-icons/gi";

import Micromodal from './Components/Micromodal'

export const timesContext = createContext(null)


function App() {

  dayjs.extend(utc)
  dayjs.extend(timezone)

  const [time, setTime] = useState(dayjs.utc())
  const [timeLocal, setTimeLocal] = useState(dayjs.utc())
  const [city, setCity] = useState('America/Argentina/San_Juan')
  const [tz, setTz] = useState("America/Argentina/San_Juan")

  useEffect(() => {
    setTimeLocal(dayjs.utc().tz(tz))
  }, [tz])

  const [openMM, setOpenMM] = useState(false)

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];




  return (
    <timesContext.Provider value={{ setCity, setTz, openMM, setOpenMM }}>
      <Micromodal />

      <div className='bg-gradient-to-br from-black to-blue-950 min-h-screen w-screen text-white'>

        {/* navbar */}
        <div className='sticky top-0 bg-gradient-to-r from-blue-600 to-blue-400'>
          <div className='max-w-[1000px] flex items-center mx-auto justify-center p-2 text-xl'>
            DayJs demostration
          </div>
        </div>

        {/* app */}
        <div className='bg-red-500/20 rounded-lg m-9 md:min-h-[500px] min-h-[500px] max-w-[80%] flex flex-col text-center text-2xl justify-around p-4 mx-auto'>

          <h1 className='font-semibold text-3xl lg:text-4xl'>Timezones of the World</h1>

          <h1 className='flex gap-4 font-semibold text-2xl lg:text-3xl items-center mx-auto bg-red-900/50 rounded-xl pl-2'>{city}<button onClick={() => setOpenMM(true)} className='hover:scale-125 hover:text-pink-300 bg-slate-950 rounded-xl p-2'><GiBackwardTime size={30} /></button></h1>

          <div className='bg-red-900/50 w-fit rounded-xl mx-auto p-4 flex flex-col gap-8'>
            <h1 className='text-7xl'>{timeLocal.format('HH:mm:ss')}</h1>
            <h1 className='text-3xl'>{days[timeLocal.day()]}, {timeLocal.format('DD/MM/YYYY')}</h1>

          </div>

        </div>



        {/* footer */}
        <div className='w-full absolute bottom-0 bg-gradient-to-r from-blue-600 to-blue-400'>
          <div className='p-1 flex justify-between items-center mx-auto'>
            <h1>React.js</h1>
            <h1>Made by MarianoD27</h1>
          </div>
        </div>
      </div>
    </timesContext.Provider>
  )
}

export default App

/* 

*/ 