import React from 'react'
import Login from './components/Login'
import FoodCard from './components/FoodCard';

function App() {
  const getFoods = () => {
    fetch('api/foods/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(data => {
      const foods = data;
    })
    .catch(err => {
      console.log(`Error in creating food: ${err}`)
    })
  }


  foods.map((food) => <FoodCard name={food.name} brand={food.brand} image={food.image} />
  )


  return (
    <div className='flex justify-center items-center h-screen'>
    <Login />
    <FoodCard />
    </div>
    )
}

export default App;