import React, { useState } from 'react'

const App = () => {
  const [Title, setTitle] = useState('')

   const SubmitHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted", Title)
    setTitle('')
   }

  return (
    <div>
      <form  onSubmit = { (e) => {
        SubmitHandler(e)
      }}>
      <input  
      type="text" 
      placeholder='Enter your name'
      value = {Title} 
      onChange={ (e) =>
        setTitle(e.target.value) 
      }
      ></input>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
