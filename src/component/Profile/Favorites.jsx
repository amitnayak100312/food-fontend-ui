import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'

const Favorites = () => {
  return (
    <div className=''>
      <h1 className='text-2xl py-5 font-semibold text-center'>
        My Favorites
      </h1>

      <div className='flex flex-wrap justifiy-center gap-5' >

        {
          [1,1,1].map((item)=><RestaurantCard/>)
        }
      </div>
    </div>
  )
}

export default Favorites
