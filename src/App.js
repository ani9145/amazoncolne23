import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Context from './components/Context';
import {Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product"  element={<Product/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/context"  element={<Context/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
