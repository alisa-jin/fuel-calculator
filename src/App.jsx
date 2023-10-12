import React from 'react'
import Login from './components/Login'
import FoodCard from './components/FoodCard';
import { useEffect, useState } from 'react';

function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch('api/foods/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(data => data.json())
    .then(dataJSON => {
      setFoods(dataJSON);
    })
    .catch(err => {
      console.log(`Error in creating food: ${err}`)
    })
  }, [])
  
  // foods.map((food) => <FoodCard name={food.name} brand={food.brand} image={food.image} />
  // )

  return (
    <div className='flex justify-center items-center h-screen bg-[#F5F5F5]'>
    <FoodCard name='Breakfast Skillet' brand='Mountain House' category='Adventure Meals' image='https://mountainhouse.com/cdn/shop/products/55451-breakfast-skillet-pouch_2000x.jpg?v=1682974230'/>
    {foods.map(food => <FoodCard name={food.name} brand={food.brand} category={food.category} image={food.image} />)}
    </div>
    )
}

export default App;