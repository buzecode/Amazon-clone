import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import Carousel from '../../Components/Carousel/CarouselEffect'
import Category from '../../Components/Category/category'
import Product from '../../Components/Product/Product'

const Landing = () => {
  return (
    <LayOut>
        <Carousel/>
        <Category/>
        <Product/>
    </LayOut>
  )
}

export default Landing