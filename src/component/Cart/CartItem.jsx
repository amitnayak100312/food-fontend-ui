import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton,Chip } from '@mui/material'
import React from 'react'

function CartItem() {
    return (
        <div className='px-5'>
            <div className=' lg:flex items-center lg:space-x-5'>
                <div className=''>
                    <img className='w-[6rem] h-[6rem] object-cover rounded-xl' src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                </div>

                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>Pizza</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div className='w-5 h-5 tect-xs flex items-center justify-center'>
                                    {5}
                                </div>
                                <IconButton>
                                    < AddCircleOutlineIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                <p>₹1953</p>
            </div>

            <div className='pt-3 space-x-2'>
                {[1,1,1,1].map((item)=><Chip label={"bread"}/>)}
            </div>
        </div>
    )
}

export default CartItem
