import React from 'react'
import FoodCard from './FoodCard'

function Login() {   
    return (
      <div className="flex flex-col rounded-lg bg-[#d4d696] w-[400px] p-8 inline items-center">
        <p className="mt-1">
          Don't have an account? <span className='dark:text-[#808337] font-bold'>Signup.</span>
        </p>
        <div className="flex flex-col gap-3 mt-3 mb-3 w-full items-center">
          <input
            className="h-9 pl-3 rounded-lg w-4/5"
            placeholder="Email"
          ></input>
          <input
            className="h-9 pl-3 rounded-lg w-4/5"
            placeholder="Password"
            type='password'
          ></input>
          <button className="rounded-lg bg-[#808337] h-10 w-4/5">Login</button>
        </div>
        ------------ OR ------------
        <div id="oauth-btns" className="flex w-full flex-col gap-1 mt-2 items-center justify-center">
          <button
            type="button"
            className="text-white w-4/5 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center dark:focus:ring-[#4285F4]/55"
          >
            Google
          </button>
          <button
            type="button"
            className="text-white w-4/5 bg-black hover:bg-slate-800 focus:ring-4 focus:ring-[#FFFFFF]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#FFFFFF]/55"
          >
            Apple
          </button>
        </div>
      </div>
  )
}

export default Login