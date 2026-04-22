import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`
    )
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index]) 

  let PrintUserData = <h3 className='text-md font-semibold translate-x-1 translate-y-1 absolute top-1/2 right-1/2'>Loading...</h3>

  if (userData.length > 0) {
    PrintUserData = userData.map((elem, idx) => (
      <div key={idx}>
        <a href={elem.url}  target='_blank'>
          <div  className='h-40 rounded-xl overflow-hidden w-44 bg-white'>
        <img className=' h-full w-full object-cover ' src={elem.download_url} alt="random" />
      </div>
      <h1 className='font-bold text-lg'>{elem.author}</h1>
        </a>
      </div>
    ))
  }

  return (
    <div className='m-5 overflow-auto'>
      

      <div className='flex flex-wrap gap-4 '>{PrintUserData}</div>


      <div className='flex justify-center items-center gap-4'>
      <button
      onClick={() => {
        if(index > 1){
          setIndex(index-1)
          setUserData([])
        }
      }} className='px-4 py-2 bg-red-400 rounded'> Prev</button>
      <h4>page {index}</h4>
      <button 
      onClick={() => {
        setIndex(index+1)
        setUserData([])
        
      }}
      className='px-4 py-2 bg-red-400 rounded'>Next</button>
    </div>
    
    </div>
    
    

  )
}

export default App