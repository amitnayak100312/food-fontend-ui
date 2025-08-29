import React from 'react'
import { Card,Chip,IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='w-[18rem]'>
            <div className={`${true?' cursor-pointer':"cursor-not-allowed"}relative`}>
                    <img 
                    className='w-full h-[10rem] object-cover rounded-t-md'
                    src="https://res.cloudinary.com/wejgrnjqf/image/upload/c_limit,w_3840/f_auto/q_auto/v1/
                    74e12e14-3922-49c2-8c61-842b9950dce2?_a=BAVAZGE70" alt="" />
                <Chip 
                size="small"
                className="absolute top-2 left-2"
                color={true?"success":"error"}
                label={true?"Open Now":"Closed"}
                />
            </div>

            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                  <p className='font-semibold text-lg'>Indian Fast Food</p>
                    <p className='text-sm'>
                        Craving it all? Dive into our global flavors and satisfy your taste buds with a variety of cuisines from around the world.
                    </p>
                </div>

                <div>
                  <IconButton>
                    {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                </div>

            </div>
          </Card>
  )
}

export default RestaurantCard
