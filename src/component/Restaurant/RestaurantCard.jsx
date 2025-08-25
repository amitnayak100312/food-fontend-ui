import React from 'react'

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
                />
            </div>
          </Card>
  )
}

export default RestaurantCard
