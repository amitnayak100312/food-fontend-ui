import React, { useState } from 'react'
import Profilenavigation from './Profilenavigation'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import { Favorite } from '@mui/icons-material';
import Orders from './Orders';
import Favorites from './Favorites';
import Address from './Address';
// import Home from './Home';
import Payment from './Payment';
import Notifications from './Notifications';
import Events from './Events';
import Logout from './Logout';

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
                        <Route path='/favorites' element={<Favorites />} />
                        <Route path='/address' element={<Address />} />
                        {/* <Route path='/home' element={<Home />} /> */}
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
