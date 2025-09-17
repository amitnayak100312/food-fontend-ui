import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const UserProfile = () => {
  return (
    <div className='min-h-[70vh] flex items-center justify-center text-center'>
      <AccountCircleIcon sx={{ fontSize: '9rem', color: '#d10f50' }} />
      <h1 className='py-5 text-3xl font-semibold'>User Profile</h1>
      <p>Email : user@example.com</p>
      <Button sx={{ margin:"2r"}}></Button>
    </div>
  )
}

export default UserProfile
