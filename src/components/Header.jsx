import React from 'react'
import { NavLink } from 'react-router-dom'

import CartBtn from './buttons/CartBtn'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-#131921 bg-#131921">
  <div className="container-fluid ">
  <NavLink to="/"><img src="./amazon_PNG25.png" alt="logo"  className='navbar-nav-img'/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <NavLink className="nav-link" to="/signup">Register</NavLink>
      <NavLink className="nav-link" to="/login">Login</NavLink>
    <CartBtn />
    </div>
  </div>
</nav>
    </>
  )
}

export default Header