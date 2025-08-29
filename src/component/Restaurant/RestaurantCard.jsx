import React from 'react';
import { Card, Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='w-[18rem]'>
      {/* This parent div needs the 'relative' class */}
      <div className="relative">
        <img
          className='w-full h-[10rem] object-cover rounded-t-md'
          src="https://res.cloudinary.com/wejgrnjqf/image/upload/c_limit,w_3840/f_auto/q_auto/v1/74e12e14-3922-49c2-8c61-842b9950dce2?_a=BAVAZGE70"
          alt="Restaurant Poster"
        />
        {/* The Chip is positioned absolutely within the relative parent */}
        <Chip
          size="small"
          label={true ? "open" : "closed"}
          color="success"
          // These classes position the chip
          className="absolute top-2 left-2"
        />
      </div>

      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>Indian Fast Food</p>
          <p className='text-sm'>
            Craving it all? Dive into our global flavors...
          </p>
        </div>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default RestaurantCard;