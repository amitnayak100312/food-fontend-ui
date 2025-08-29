import { Grid } from '@mui/material'
import React from 'react'

const RestaurantDetail = () => {
  return (
    <div className='px-5 lg:px-20'>
        <section> <h2 className='text-2xl font-semibold'>Restaurant Name</h2>
          <p className='text-sm text-gray-600'>Cuisine: Indian</p>
          <p className='mt-2'>Description: A delightful place to enjoy authentic Indian cuisine.</p>

          <div>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <img className='w-full h-[40vh] obkect-cover'
                    src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/335581096/original/7462bc5f9c9411f8e01ba3bf57f2115c69acc68d/create-high-quality-4k-renders-for-your-restaurant-and-cafe-e48e.jpg'/>  </Grid>


            </Grid>
          </div>
        </section>
    </div>
  )
}

export default RestaurantDetail
