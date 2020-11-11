import React from 'react'

import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import Products from './Products'
import Nav from './Nav'
import Footer from './Footer'


function Homepage() {
    return (
     <div className="conatiner">
       <Nav />
        <Carousel />
        <Products />
        <Footer />
      </div>
    )
}

export default Homepage
