import React from 'react'
import card from './assets/components/card'
import navbar from './assets/components/navbar'

const App = () => {
  return (
    <div className='main'>
      {navbar()}
      <div className = "card" >
        <h1> Mohammed Sharib</h1>
        <p>road to full stack</p>
      </div>
      {card()}
      
      
    </div>
    
  )
}

export default App
