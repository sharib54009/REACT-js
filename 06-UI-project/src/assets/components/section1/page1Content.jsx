import React from 'react'
import RightContent from './rightContent'
import Leftcontent from './leftcontent'

const Page1Content = (props) => {
  return (
    <div className='py-5 px-15 flex gap-10 items-center h-[90vh]  '>

      <Leftcontent />
      <RightContent users={props.users} />
      
    </div>
  )
}

export default Page1Content
