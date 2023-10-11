import React from 'react'
import Login from './components/Login'
import FoodCard from './components/FoodCard';

function App() {
  const foods = [];
  fetch('api/foods/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(data => data.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i])
      foods.push(<FoodCard name={data[i].name} brand={data[i].brand} image={data[i].image} />)
    }
    console.log(foods)
  })
  .catch(err => {
    console.log(`Error in creating food: ${err}`)
  })
  // foods.map((food) => <FoodCard name={food.name} brand={food.brand} image={food.image} />
  // )

  return (
    <div className='flex justify-center items-center h-screen bg-[#F5F5F5]'>
    <Login />
    <FoodCard name='Breakfast Skillet' brand='Mountain House' category='Adventure Meals' image='https://mountainhouse.com/cdn/shop/products/55451-breakfast-skillet-pouch_2000x.jpg?v=1682974230'/>
    </div>
    )
}

export default App;