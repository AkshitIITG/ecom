import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Homepage from './customer/pages/Homepage/Homepage';
import Footer from './customer/components/Footer/Footer';
import { Product } from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <ProductDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
