import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
   <div className='absolute top-0 left-0 w-full h-full  p-8 flex flex-col justify-between'>  
         <h2 className='  text-black bg-white rounded-full flex justify-center items-center h-14 w-14 text-2xl font-bold' >{props.id+1}</h2>
          <div>
            <p className='text-lg leading-normal text-white mb-10 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sequi illo voluptas magni amet ullam.</p>
           <div className='flex gap-4 mt-4 justify-between '>
             <button className='bg-blue-500 text-white px-4 py-2 rounded-full flex items-center '>{props.tag} <ArrowRight /></button>
             <button className='bg-blue-500 text-white px-4 py-2 rounded-full flex items-center '><ArrowRight /></button>
           </div>
        </div>
        </div>
  )
}

export default RightCardContent
