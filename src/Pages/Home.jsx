
import React from 'react'
import Overflow from '../Components/Overflow/Overflow'
import Products from './Layout/Products'
import Orders from './Layout/Orders'

const Home = () => {


  return (
    <div className='home-section'>
      <Overflow />
      <Products />
      <Orders />
    </div>

  )
}

export default Home