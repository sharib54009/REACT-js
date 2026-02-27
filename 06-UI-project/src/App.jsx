import React from 'react'
import Section1 from './assets/components/section1/section1'
import Section2 from './assets/components/section2/section2'
const App = () => {
  const users = [
    {
      img : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro : '',
      tag : 'Satisfied'
    },
     {
      img : 'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
      intro : '',
      tag : 'Underserved'
    },
     {
      img : 'https://images.unsplash.com/photo-1670401042459-f1578ff39799?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd1eSUyMHdvcmtpbmclMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
      intro : '',
      tag : 'Underbanked'
    },
     {
      img : 'https://plus.unsplash.com/premium_photo-1661576523483-3f0bfc9a3fdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGd1eSUyMHdvcmtpbmclMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
      intro : '',
      tag : 'Underbanked'
    },
     {
      img : 'https://images.unsplash.com/photo-1548412542-fe1d1181336c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwd29ya2luZyUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww',
      intro : '',
      tag : 'Underbanked'
    }
  ]
  return (

    <div >
     

      <Section1  users={users}/>
      <Section2 />
    </div>
   
  )
  
}

export default App
