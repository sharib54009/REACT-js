import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold'>Sharibs</h2>

      <div className='flex gap-8 text-lg'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/about' className='hover:underline'>About</Link>
        <Link to='/products' className='hover:underline'>Products</Link>
        
      </div>
    </div>
  )
}

export default Navbar