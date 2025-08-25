import React from 'react'

const RestaurantCard = () => {
  return (
    <Card className='m-5 w-[18rem]'>
            <div className={`${true?' cursor-pointer':"cursor-not-allowed"}relative`}>
                    <img src="https://via.placeholder.com/150" alt="" />
                    
            </div>
          </Card>
  )
}

export default RestaurantCard
