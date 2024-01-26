import { Grid, Typography, Button } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-100'
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About Us</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Media</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Careers</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Vendors</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Become a Vendor Us</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Insights</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Support</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>For Developers</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>API Documentation</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Privacy Policy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Terms and Conditions</Button>
                    </div>
                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 Ecom Company. All Rights Reserved
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Contact us: ecom@abc.com
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
