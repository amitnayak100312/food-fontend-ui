import React from 'react'
import { Card,Chip,IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='m-5 w-[18rem]'>
            <div className={`${true?' cursor-pointer':"cursor-not-allowed"}relative`}>
                    <img 
                    className='w-full h-[10rem] object-cover rounded-t-md'
                    src="https://via.placeholder.com/150" alt="" />
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
