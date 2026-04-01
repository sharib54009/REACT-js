import React from 'react'
import { useState } from 'react';

const App = () => {
 const [Title, setTitle] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(Title);
    setTitle("")
   

  }
  return (
    <div className=' h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex items-start lg:w-1/2 p-10     flex-col gap-4 '>

        <input
          className='px-5 w-full py-2 outline-none border-2 rounded-2xl'
          type="text"
          placeholder='Enter Notes Heading'
          value={Title}
          onChange={(e) =>{
            setTitle(e.target.value)
          }}
        >

        </input>
        <textarea
          className='px-5 py-2 w-full outline-none h-20 border-2 rounded-2xl'
          type="text"
          placeholder='Write Details'
        >

        </textarea>
        <button className='w-full outline-none bg-white rounded-2xl text-black h-10'>Add Notes</button>

      </form>
      <div className='lg:w-1/2 lg:border-2 p-10'>
        <h1 className='text-2xl font-bold'>Notes List</h1>
        <div className = "flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className='bg-white rounded-2xl h-60 w-50'></div>
        </div>
      </div>

    </div>
  )
}

export default App
