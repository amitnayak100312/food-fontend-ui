import React from 'react';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';
import RestaurantDetailPage from '../Restaurant/RestaurantDetail';
import Home from '../Home/Home';
import { Navbar } from '../Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import UserProfile from '../Profile/UserProfile';


export const CustomerRoute = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/account/:register' element={<Profile />}/>
            <Route path='/restaurant/:city/:title/id' element={<RestaurantDetailPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
        </Routes>
    </div>
  )
}