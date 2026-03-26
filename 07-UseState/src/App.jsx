import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function IncreaseNum () {
     setNum(num + 1)
  }

  function DecreaseNum (){
     setNum(num - 1)
  }

  function JumpBy5 () {
     setNum(num + 5)
  }

  return (
    <div>
      <div className='p'>{num}</div>
      <button className= 'btn'onClick={IncreaseNum} > Increase</button>
      <button className= 'btn' onClick={DecreaseNum}> decrease</button>
      <button className= 'btn' onClick={JumpBy5}> Jump by 5</button>
    </div>
    
    

  )
}

export default App
