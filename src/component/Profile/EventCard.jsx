import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia 
        sx={{height:350}}  
        image='https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg'/>
      <CardContent>
        <Typography variant="h5">
            Indian Fast Food
        </Typography>

         <Typography variant="body2">
            50% off on your first order
        </Typography>

        <div className='py-2 space-y-2'>
            <p>{"mumbai"}</p>
            <p className='text-sm text-blue-500'> February 14,2025 12:00 AM</p>
            <p className='text-sm text-red-500'> February 15,2025 12:00 AM</p>
        </div>
      </CardContent>
    <C
      <CardContent>
        <DeleteIcon />
      </CardContent>
      </Card>
    </div>
  )
}

export default EventCard
