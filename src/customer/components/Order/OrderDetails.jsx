import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from '../OrderTracking/OrderTracking'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='font-bold text-zl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracking activeStep={2}/>
        </div>

        <Grid className='space-y-5' container>
            {[1,1,1,1].map( item => 
            <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems: 'center', justifyContent: 'space-between'}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='h-[5rem] w-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/1/4/v/-original-imaggjcyhzz4myqh.jpeg?q=70"/>
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Men Slim Mid Rise Blue Jeans</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color:Blue </span><span>Size: L</span></p>
                            <p>Seller: Fashion Hub</p>
                            <p>₹1999</p>
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Box >
                        <StarBorderIcon sx={{fontSize: "2rem"}} className='px-2 text-5xl'/>
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>

            </Grid>)}

        </Grid>
    </div>
  )
}

export default OrderDetails