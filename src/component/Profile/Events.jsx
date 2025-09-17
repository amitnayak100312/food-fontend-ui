import React from 'react'
import EventCard from './EventCard'

const Event = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>
        Event List
      </h1>
    <div className='mt-3 px-5 flex flex-wrap gap-5'>
      {[1,1,1].map((item)=><EventCard/>)}
        
    </div>
    </div>
  )
}

export default Event
