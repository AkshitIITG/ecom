import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from '../customer/components/Navigation/Navigation'
import Homepage from '../customer/pages/Homepage/Homepage'
import Cart from '../customer/components/Cart/Cart'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import { Product } from '../customer/components/Product/Product'
import Footer from '../customer/components/Footer/Footer'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'


const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>} />
                <Route path='/product/:productId' element={<ProductDetails/>} />
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/account/orders' element={<Order/>}/>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}/>
            
            </Routes>
            
      <Footer/>
        </div>
    )
}

export default CustomerRouters
