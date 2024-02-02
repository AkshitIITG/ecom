import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg broder rounded-md'>
            <div className='flex item-center'>
                <div className='h-[5rem] w-[5rem] lg:h-[9rem] lg:w-[9rem]'>
                    <img className='h-full w-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/v/c/n/30-586035-v-mart-original-imagmh7fzah3r2jj.jpeg?q=70" />
                </div>

                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Men Sim Mid Rise Blue Jeans</p>
                    <p className='opacity-70'>Size: M,Blue</p>
                    <p className='opacity-70 mt-2'>Seller: Fashion Hub</p>
                    <div className="flex space-x-5 items-center lg:text-xl text-grey-900 pt-6">
                        <p className="font-semibold">199</p>
                        <p className="opacity-50 line-through">211</p>
                        <p className="text-green-600 font-semibold">5% Off</p>
                    </div>
                </div>

            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>4</span>
                    <IconButton>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div>
                    <Button>Remove</Button>
                </div>
            </div>

        </div>
    )
}

export default CartItem