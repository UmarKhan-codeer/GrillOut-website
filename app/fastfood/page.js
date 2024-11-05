import BurgerCategory from '../burger/page'
import PizzaCategory from '../pizza/page'
import React from 'react'

const page = () => {
  return (
    <div>
      <PizzaCategory/>
      <BurgerCategory/>
    </div>
  )
}

export default page
