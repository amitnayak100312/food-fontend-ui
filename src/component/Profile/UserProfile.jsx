import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const UserProfile = () => {
  const handleLogout = () => {}
  return (
    <div className='min-h-[70vh] flex items-center justify-center text-center'>
      <div className='absolute top-0 left-0 w-full h-[30vh] bg-[#d10f50] -z-10'></div>
      <AccountCircleIcon sx={{ fontSize: '9rem', color: '#d10f50' }} />
      <h1 className='py-5 text-3xl font-semibold'>User Profile</h1>
      <p>Email : user@example.com</p>
      <Button onClick={handleLogout} sx={{ margin:"2rem 0rem"}}>Logout</Button>
    </div>
  )
}

export default UserProfile
