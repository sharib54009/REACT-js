import React from 'react'
import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className= "parent">
      <div className="card">
        <div className="top">
          <img src="https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&P=0&h=180"></img>
          <button>Save <Bookmark size = {30}  /> </button>
        </div>
        <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>senior UI/UX designer</h2>
            <div className= "tag">
              <h4> part time</h4>
              <h4> senior level</h4>
            </div>
        </div>
        <div className="bottom">
          
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>
          
           <button>Apply Now</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
