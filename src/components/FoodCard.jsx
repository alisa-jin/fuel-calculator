import React from 'react'

function FoodCard({name, brand, calories, water, ingredients, image}) {
  return (
    <div>
        <h2>{name}</h2>
        <h3>{brand}</h3>
    </div>
  )
}

export default FoodCard