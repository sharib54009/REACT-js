import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <div className='flex items-center justify-center gap-4 py-4'>
            <Link to='/products/kids' className='hover:underline'>Kids</Link>
        <Link to='/products/mens' className='hover:underline'>Mens</Link>
        <Link to='/products/womens' className='hover:underline'>Womens</Link>
        </div>
        <Outlet />
     
    </div>
  )
}

export default Products
