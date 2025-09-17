import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton,Avatar,Badge, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"

export const Navbar = () => {
    return (
        // The main container with a pink background, flex layout, and padding
        <Box  className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#d10f50] lg:px-20 flex justify-between'>
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
         
                <li  className='logo font-semibold text-white text-2xl'>
                    Eatway
                </li>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div>
                    <IconButton sx={{ color: 'white' }}>
                        <SearchIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                </div>

                <div className=''>
                   <Avatar sx={{ bgcolor: 'white', color: '#d10f50' }}>
                        P
                   </Avatar>
                 </div>

                <div className=''>
                    <IconButton >
                        <Badge bgcolor="primary" badgeContent={3}>
                        <ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />
                        </Badge>
                    </IconButton>
                </div> 

            </div>
        </Box>
    );
};