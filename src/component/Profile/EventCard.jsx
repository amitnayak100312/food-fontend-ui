import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const EventCard = () => {
  return (
    <div>
      <Card>
        <CardMedia 
        sx={{height:350}}  
        image='https://www.google.com/imgres?q=image%20food&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1551024601-bec78aea704b%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdelicious-food&docid=jOprI7MUwRmUxM&tbnid=J3ELhHxz9_6meM&vet=12ahUKEwiDrPforuCPAxX6Z_UHHUxULXMQM3oECHoQAA..i&w=3000&h=3750&hcb=2&ved=2ahUKEwiDrPforuCPAxX6Z_UHHUxULXMQM3oECHoQAA'
      />
      <CardContent>
        <Typography>
            Indian 
        </Typography>
      </CardContent>
      </Card>
    </div>
  )
}

export default EventCard
