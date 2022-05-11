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

      const sortbyproduct=(item)=>{
        if(item==="man"){
          let rea=DATA.filter((a)=>a.category)
          setData([...rea])
          console.log(rea)
        }else if(item==="Kitchen"){
          let rea=DATA.filter((a)=>a.categor)
          setData([...rea])
        }else if(item==="electronics"){
          let rea=DATA.filter((a)=>a.catego)
          setData([...rea])
        }
        else if(item==="mobile"){
          let rea=DATA.filter((a)=>a.categ)
          setData([...rea])
        }
      }
      


  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
            <div className="row justify-content-around">
              <div className="btn1 d-flex justify-content-center">
                <Button className="mt-8 w-32 " onClick={() => { sortBylow("l") }}>Less price</Button>
              </div>
              <div className="btn1 d-flex justify-content-center">
                <Button className="mt-8 w-32  " onClick={() => { sortBylow("h") }}>high price</Button>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="btn1 d-flex justify-content-center">
                <NavLink to={`/Man`}><Button className="mt-8 w-32 " onClick={() => { sortbyproduct("man") }}>man</Button></NavLink>
              </div>
              <div className="btn1 d-flex justify-content-center">
                <NavLink to={`/Mobile`}><Button className="mt-8 w-32" onClick={() => { sortbyproduct("mobile") }}>mobile</Button></NavLink>
              </div>
              <div className="btn1 d-flex justify-content-center">
                <NavLink to={`/ele`}><Button className="mt-8 w-32 " onClick={() => { sortbyproduct("electronics") }}>electronics</Button></NavLink>
              </div>
              <div className="btn1 d-flex justify-content-center">
                <NavLink to={`/Kichen`}><Button className="mt-8 w-32  " onClick={() => { sortbyproduct("Kitchen") }}>Kitchen</Button></NavLink>
              </div>
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