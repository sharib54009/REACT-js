import React from 'react'
import { ArrowRight } from 'lucide-react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden rounded-4xl relative [box-shadow:0_20px_50px_rgba(0,0,0,0.5)]'>
        <img  className=" w-full h-full object-cover rounded-4xl" src={props.img} alt="" />
        
       <RightCardContent  id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard
