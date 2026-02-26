import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = () => {
  return (
    <div className='h-full w-80 overflow-hidden rounded-4xl relative'>
        <img  className=" w-full h-full object-cover rounded-4xl" src="" alt="" />
        <div className='absolute top-0 left-0 w-full h-full  bg-amber-600 pAQō-6'>  
         <h2 className='bg-white  text-black'>1</h2>
        <div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sequi illo voluptas magni amet ullam.</p>
            <button>Satisfied <ArrowRight /></button>
        </div>
        </div>
       
    </div>
  )
}

export default RightCard
