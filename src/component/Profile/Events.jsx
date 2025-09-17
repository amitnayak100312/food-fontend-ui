import React from 'react'

const Event = () => {
  return (
    <div className='mt-3 px-5 flex flex-wrap gap-5'>
      {[1,1,1].map((item)=><Event/)}
        
    </div>
  )
}

export default Event
