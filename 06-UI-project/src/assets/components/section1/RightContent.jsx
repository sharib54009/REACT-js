import React from 'react'
import RightCard from './RightCard'

const RightContent = ({ users }) => {
  console.log(users)
  return (
    <div id ='right' className='h-full w-2/3 overflow-x-auto p-7 rounded-4xl flex justify-between gap-10  bg-gray-100 bg-neutral-100 bg-zinc-100'>
      {users.map((elem, idx) => (
        <RightCard
          key={elem.id || idx}
          id={idx}
          img={elem.img}
          tag={elem.tag}
          intro={elem.intro}
        />
      ))}
    </div>
  )
}

export default RightContent