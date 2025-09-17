import React from 'react'
import OrderCard from './OrderCard'
const Orders = () => {
  return (
    <div className='flex items-center flex-col'>
        <h1 className='0xt-2xl py-5 font-semibold text-center'>My Orders</h1>
        <div className='space-y-4 w-full lg:w-1/2'>
         {
            [1,1,1].map((i)=><OrderCard/>)
         }
    </div>
    </div>
  )
}

export default Orders
