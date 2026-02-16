import React from 'react'

const Card = ({ user }) => {
  console.log(user);

  return (
    <div className="card">
      <img 
        src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=398&auto=format&fit=crop"
        alt="profile"
      />
      <h1>{user}</h1>
      <button>Follow</button>
    </div>
  )
}

export default Card
