import React, { useState } from 'react'
import Profilenavigation from './Profilenavigation'
import { Route } from 'react-router-dom';
const Profile = () => {
    const [openSideBar,setOpenSideBar] = useState(false);
    return (
        <div>
            <div className='lg:flex justify-between'>
                <div className='lg:flex justify-between'>
                    <div className='sticky h-[80vh] lg:w-[20%]'>
                        <Profilenavigation open={openSideBar} />
                    </div>
                    <div className='lg:w-[80%]'>
                    <Routes>
                        <Route path="/" element={<UserProfile />} />
                    </Routes>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
