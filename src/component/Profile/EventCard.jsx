import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia 
        sx={{height:345}}  
        image='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg'/>
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
