import React from 'react'
import EventCard from './EventCard'

const Event = () => {
  return (
    <div className='mt-3 px-5 flex flex-wrap gap-5'>
      <h1 className='flex '></h1>
      {[1,1,1].map((item)=><EventCard/>)}
        
    </div>
  )
}

export default Event
