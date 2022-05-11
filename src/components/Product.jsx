import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import {Button } from '@mui/material'
import DATA from '../Data'

const Product = () => {
  const [data,setData] = useState(DATA)
  

    const cardItem=(item)=>{
      return(
        <div className="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
          <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body text-center">
              <h5 className="card-title">{item.title}</h5>
             <p className="lead">₹{item.price}</p>
              <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
            </div>
        </div>
      );
    }

  
    
    const sortBylow =(item) => {
      if(item==="l"){
       let res = DATA.sort((a,b) => a.price - b.price)
       setData([...res])
       console.log(res)
      }else if( item==="h"){
        let res = DATA.sort((a,b) => b.price - a.price)
        setData([...res])
        //console.log(res)
      }
      
      }


  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
            <div className="btn1">
              <Button className="mt-8 w-32 " onClick={() => { sortBylow("l") }}>Less price</Button>
            </div>
            <div className="btn1">
              <Button className="mt-8 w-32  " onClick={() => { sortBylow("h") }}>high price</Button>
            </div>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {DATA.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product