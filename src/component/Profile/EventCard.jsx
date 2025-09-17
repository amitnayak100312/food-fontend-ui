import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia 
        sx={{height:345}}  
        image='https://www.pexels.com/photo/burger-with-fried-fries-on-black-plate-with-sauce-on-the-side-1199957/'/>
      <CardContent>
        <Typography variant="h5">
            Indian Fast Food
        </Typography>
      </CardContent>
      </Card>
    </div>
  )
}

export default EventCard
