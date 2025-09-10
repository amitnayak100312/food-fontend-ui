import React from 'react'
import Profilenavigation from './Profilenavigation'
const Profile = () => {
    return (
        <div>
            <div className='lg:flex justify-between'>
                <div className='lg:flex justify-between'>
                    <div className='sticky h-[80vh] lg:w-[20%]'>
                        <Profilenavigation />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
