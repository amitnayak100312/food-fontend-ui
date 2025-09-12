import React, { useState } from 'react'
import Profilenavigation from './Profilenavigation'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import { Favorite } from '@mui/icons-material';


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
                        <Route path='/order history' element={<Orders />} />
                        <Route path='/favorites' element={<Favorite />} />
                        <Route path='/address' element={<Address />} />
                        <Route path='/home' element={< />} />
                        <Route path='/payment' element={<Payment />} />
                        <Route path='/notifications' element={<Notifications />} />
                        <Route path='/events' element={<Events />} />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
