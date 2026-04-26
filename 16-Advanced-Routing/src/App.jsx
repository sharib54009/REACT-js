import React from 'react'
import Navbar from './assets/Components/Navbar'
import Footer from './assets/Components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Products from './assets/Pages/Products'
import NotFound from './assets/Pages/NotFound'
import Kids from './assets/Pages/Kids'
import Mens from './assets/Pages/Mens'
import Womens from './assets/Pages/Womens'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} >
        <Route path='kids' element={<Kids />} />
        <Route path='mens' element={<Mens />} />
        <Route path='womens' element={<Womens />} />
        </Route>
        <Route path='*' element={<NotFound />} /> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App
