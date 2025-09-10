import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const menu =[
    {title:"Order History",icon:<ShoppingBagIcon/>},
    {title:"Favorites",icon:<FavoriteIcon/>},
    {title:"Add Reaction",icon:<AddReactionIcon/>},
    {title:"Home",icon:<HomeIcon/>},
    {title:"Payment",icon:<AccountBalanceWalletIcon/>},
    {title:"Notifications",icon:<NotificationsIcon/>},
    {title:"Events",icon:<EventIcon/>},
    {title:"Logout",icon:<LogoutIcon/>},
]
const Profilenavigation = () => {
  return (
    <div>
      <h2>Profile Navigation</h2>
    </div>
  )
}

export default Profilenavigation
