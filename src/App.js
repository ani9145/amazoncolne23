import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Signup from './components/Signup';
import Login from './components/Login'
import Footer from './components/Footer';
import {Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product"  element={<Product/>}/>
        <Route path="/product/:id"  element={<ProductDetail/>}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/checkout"  element={<Checkout/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/footer"  element={<Footer/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
