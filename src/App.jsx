import React from 'react'
import Login from './components/Login'
import FoodCard from './components/FoodCard';
import Header from './components/Header'
import { useEffect, useState } from 'react';

function App() {
  const [foods, setFoods] = useState([])
  const [totalWater, setTotalWater] = useState(0);

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
    <div>
      <h1>Water Amount: {totalWater}</h1>
      <div className='flex justify-center items-center h-screen bg-[#F5F5F5] gap-3 flex-wrap'>
      {foods.map(food => <FoodCard key={food._id} name={food.name} brand={food.brand} category={food.category} image={food.image} water={food.water} totalWater={totalWater} setTotalWater={setTotalWater}/>)}
      </div>
    </div>
    )
}

export default App;