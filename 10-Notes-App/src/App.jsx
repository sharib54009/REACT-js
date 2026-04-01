import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {
 const [Title, setTitle] = useState("")
  const [Details, setDetails] = useState("")
  const [Task, setTask] = useState([])
  


  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...Task]
    copyTask.push({Title, Details})
    setTask(copyTask);
    setTitle("")
    setDetails("")
  }
const deleteNote = (index) => {
  const copyTask = [...Task]
  copyTask.splice(index, 1)
  setTask(copyTask)
}

  return (
    <div className=' h-screen lg:flex bg-black text-white overflow-auto'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex items-start lg:w-1/2 p-10     flex-col gap-4 '>

        <input
          className='px-5 w-full py-2 outline-none border-2 rounded-2xl'
          type="text"
          placeholder='Enter Task'
          value={Title}
          onChange={(e) =>{
            setTitle(e.target.value)
          }}
        >

        </input>
        <textarea
          className='px-5 py-2 w-full outline-none h-20 border-2 rounded-2xl'
          type="text"
          placeholder='Task Details'
          value={Details}
          onChange={ (e) => {
           setDetails(e.target.value)
          }}
        >

        </textarea>
        <button className='w-full outline-none active:scale-90 bg-white rounded-2xl text-black h-10 font-semibold'>Add Task</button>

      </form>
      <div className='lg:w-1/2 lg:border-2 p-10'>
        <h1 className='text-2xl font-bold'>Task List</h1>
        <div className = "flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {Task.map((item, index) => {
            return           <div key ={index} className='relative  overflow-auto bg-white rounded-2xl lg:h-60 lg:w-50 h-20 w-15'>
              <h2 onClick={ () => {
                deleteNote(index) 
              }} className='absolute lg:top-2 lg:right-2 top-[1px] right-[1px] bg-red-700 rounded-full cursor-pointer active:scale-90 lg:p-1 p-[px] mt-2 mr-1 lg:text-xs text-[2px] '><X size={10}/></h2>
              <h1 className='lg:text-xl text-xs font-bold text-black lg:py-9 py-3 lg:px-4 px-1'>{item.Title}</h1>
              <p className='text-gray-600 p-2 mt-3'>{item.Details}</p>
            </div>
            
            

          })} 
        </div>
      </div>

    </div>
  )
}

export default App
