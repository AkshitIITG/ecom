import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust'
import { useNavigate } from 'react-router-dom'

const OrderCard = () => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/account/order/${7}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='h-[5rem] w-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/1/4/v/-original-imaggjcyhzz4myqh.jpeg?q=70" />
                        <div className='ml-5 space-y-2'>
                            <p className=''>Men Slim Mid Rise Blue Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: L</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Blue</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>₹1089</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon sx={{ height: "15px", width: "15px" }} className='text-green-600 mr-2 text-sm' />
                            <span>
                                Delivered On January 22
                            </span>
                        </p>
                        <p className='text-xs'>Your item has been delivered</p>
                    </div>}

                    {false && <p>
                        <span>
                            Delivered On January 22
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard