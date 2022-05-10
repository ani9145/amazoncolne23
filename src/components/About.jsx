import React from 'react'
import {NavLink} from "react-router-dom"

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className="land mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quidem officiis sequi culpa explicabo in maxime voluptatem inventore, cum at ipsa eos voluptas nemo quo nam laboriosam temporibus reprehenderit voluptatum.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quidem officiis sequi culpa explicabo in maxime voluptatem inventore, cum at ipsa eos voluptas nemo quo nam laboriosam temporibus reprehenderit voluptatum.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Conact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.jpg" alt="About Us" 
            height="400px" width="400px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About