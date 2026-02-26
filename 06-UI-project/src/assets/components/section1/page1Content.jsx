import React from 'react'
import RightContent from './rightContent'
import Leftcontent from './leftcontent'

const Page1Content = () => {
  return (
    <div className='py-10 px-15 flex gap-10 items-center h-[90vh]  '>

      <Leftcontent />
      <RightContent />
      
    </div>
  )
}

export default Page1Content
