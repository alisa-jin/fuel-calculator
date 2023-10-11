import React from 'react'
import { useState } from 'react';

function FoodCard({name, brand, image}) {

  // const onSubmit = () => {
  //   const waterOz = +water
  //   console.log({name, brand, water: waterOz, image})
  //   fetch('api/foods/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name,
  //       brand,
  //       water: Number(water),
  //       image
  //     })
  //   })
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(err => {
  //     console.log(`Error in creating food: ${err}`)
  //   })
  // }



  return (
    <div className = 'flex flex-col'>
        <h1>{name}</h1>
        <h2>{brand}</h2>
        <img src={image}></img>
    </div>
  )
}

export default FoodCard