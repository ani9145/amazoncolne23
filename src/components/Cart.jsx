import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../redux/actions/index'
import { addItem } from '../redux/actions/index'
import { NavLink } from 'react-router-dom'


const Cart = () => {

    const state=useSelector((state)=>state.addItem)
    const dispatch=useDispatch()

    const handleClose=(item)=>{
        dispatch(delItem(item))
    }

    const handleButton=(item)=>{
        dispatch(addItem(item))
    }
    

    const cartItems=(cartItem)=>{
        return(
            <div className="px-4 bf-light rounded-3" kry={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label='Close'></button>
                        <div className="row justify-content-Center">
                            <div className="col-md-4">
                                <img src={cartItem.image} alt={cartItem.title} height="200px"
                                width="180px"/>
                            </div>
                            <div className="col-md-4">
                              <h3>{cartItem.title}</h3>

                              <p className='lead fw-bold'>
                                  {cartItem.qty} X ₹{cartItem.price}=₹
                                  {cartItem.qty * cartItem.price}
                                  </p>
                                  <button onClick={()=>handleClose(cartItem)}className='btn btn-outline-dark me-4'><i className='fa fa-minus'></i></button>
                                  <button onClick={()=>handleButton(cartItem)}className='btn btn-outline-dark'><i className='fa fa-plus'></i></button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }

    const emptyCart= () =>{
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-4">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const button=()=>{
        return(
            <div className="container">
            <div className="row">
                <NavLink to="/checkout" className="btn btn-outline-primary w-25">Proceed To Checkout</NavLink>
            </div>
            </div>
        )
    }

  return (
    <>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(cartItems)}
    {state.length !== 0 && button()}
    </>
  )
}

export default Cart