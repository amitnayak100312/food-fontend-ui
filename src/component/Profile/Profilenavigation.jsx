import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import AddReaction from '@mui/icons-material/AddReaction';
import { useMediaQuery,Drawer, Divider } from '@mui/material';

const menu =[
    {title:"Order History",icon:<ShoppingBagIcon/>},
    {title:"Favorites",icon:<FavoriteIcon/>},
    {title:"Address",icon:<AddReaction/>},
    {title:"Home",icon:<HomeIcon/>},
    {title:"Payment",icon:<AccountBalanceWalletIcon/>},
    {title:"Notifications",icon:<NotificationsIcon/>},
    {title:"Events",icon:<EventIcon/>},
    {title:"Logout",icon:<LogoutIcon/>},
]
const Profilenavigation = ({open,handleClose}) => {
    const isSmallScreen = useMediaQuery('(max-width:1080px)');

  return (
    <div>
      <Drawer variant={isSmallScreen ? "temporary" : "permanent"} 
      onClose={handleClose} 
      open ={isSmallScreen ? open : true} 
      anchor="left"
      sx={{zIndex:1}}>

        <div className='w-[50vw] lg:w-[20vw] 
        h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'> 
            {menu.map((item,i)=><>
            <div className='px-5 flex items-center space-x-5 cursor-pointer'>
              {item.icon}
              <span>{item.title}</span>
            </div>
            {i!== menu.length-1 && <Divider />}
            </>)}
        </div>

      </Drawer>
    </div>
  )
}

export default Profilenavigation
