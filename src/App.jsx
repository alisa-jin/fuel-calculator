import React from 'react'
import FoodCard from './components/FoodCard';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import Header from './components/Header'
import { useEffect, useState } from 'react';
import FoodContainer from './components/FoodContainer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  }
})

function App() {
  // const [foods, setFoods] = useState([])
  const totalWater = 0;




  return (
    <QueryClientProvider client={queryClient}>
      <h1>Water Amount: {totalWater}</h1>
      <FoodContainer />
      <div className='flex justify-center items-center h-screen bg-[#F5F5F5] gap-3 flex-wrap'>
      </div>
    </QueryClientProvider>
    
    )
}

export default App;



  // useEffect(() => {
  //   fetch('api/foods/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   .then(data => data.json())
  //   .then(dataJSON => {
  //     setFoods(dataJSON);
  //   })
  //   .catch(err => {
  //     console.log(`Error in creating food: ${err}`)
  //   })
  // }, [])
  
  // foods.map((food) => <FoodCard name={food.name} brand={food.brand} image={food.image} />
  // )