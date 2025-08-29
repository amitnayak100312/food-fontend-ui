import { Grid } from '@mui/material'
import React from 'react'

const RestaurantDetail = () => {
  return (
    <div className='px-5 lg:px-20'>
        <section> <h2 className='text-2xl font-semibold'>Restaurant Name</h2>
          <p className='text-sm text-gray-600'>Cuisine: Indian</p>
          <p className='mt-2'>Description: A delightful place to enjoy authentic Indian cuisine.</p>

          <div>
            <Grid container spacing={2} className='mt-5'>


            </Grid>
          </div>
        </section>
    </div>
  )
}

export default RestaurantDetail
