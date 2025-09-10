import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import AddReaction from '@mui/icons-material/AddReaction';
import { useMediaQuery } from '@mui/material';

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
    const isSmallScreen = useMediaQuery("(max-width:1080)");
    const 
  return (
    <div>
      <Drawer variant={isSmallScreen ? "temporary" : "permanent"} onClose={handleClose} open ={open} anchor="left">

      </Drawer>
    </div>
  )
}

export default Profilenavigation
