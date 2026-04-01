import React from 'react'

const App = () => {
   const SubmitHandler = (e) => {
    e.preventDefault
    console.log("Form submitted")
   }

  return (
    <div>
      <form  onSubmit = { (e) => {
        SubmitHandler(e)
      }}>
      <input  type="text" placeholder='Enter your name'></input>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
