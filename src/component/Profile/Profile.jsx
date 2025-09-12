import React, { useState } from 'react'
import Profilenavigation from './Profilenavigation'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import UserProfile from './UserProfile';


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
                        <Route path='/order history' element={<Orde} />
                        <Route path='/favorites' element={<div>Favorites</div>} />
                        <Route path='/address' element={<div>Address</div>} />
                        <Route path='/home' element={<div>Home</div>} />
                        <Route path='/payment' element={<div>Payment</div>} />
                        <Route path='/notifications' element={<div>Notifications</div>} />
                        <Route path='/events' element={<div>Events</div>} />
                        <Route path='/logout' element={<div>Logout</div>} />
                    </Routes>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
