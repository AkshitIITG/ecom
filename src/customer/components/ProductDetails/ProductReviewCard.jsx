import React from 'react'
import {Grid, Box, Avatar, Rating} from '@mui/material';

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar classname="text-white" sx={{width: 56, height: 56, bgcolor: "#8d5ce6"}}>A</Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className="font-semibold-text-lg">Rahul</p>
                        <p className="opacity-70">1st Feb, 2024</p>
                    </div>
                </div>

                <Rating value={4} precision={0.5} name="half-rating" read-only></Rating>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard