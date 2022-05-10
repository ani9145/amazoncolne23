import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import {Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product"  element={<Product/>}/>
        <Route path="/products/:id"  element={<ProductDetail/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
