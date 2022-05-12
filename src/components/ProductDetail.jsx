import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux'
import { addItem,delItem } from '../redux/actions/index'

const ProductDetail = () => {
    
    const {id} = useParams();
    const [product,setProduct]=useState([])
    const [loading,setLoading]=useState(false);
    const [cartBtn, setCartBtn] =useState("Add To Cart")

    useEffect(()=>{
      const getProduct=async()=>{
          setLoading(true)
          const response=await fetch(`http://localhost:8005/product/${id}`);
          setProduct(await response.json())
          setLoading(false)
      }
      getProduct()
    }, [])
    
 const Loading=()=>{
    return(
      <>
      Loading...
      </>
    )
}
const dispatch=useDispatch()
    
const handleCart=(product)=>{
     if(cartBtn==="Add To Cart"){
        dispatch(addItem(product))
         setCartBtn("Remove From Cart")
     }else{
        dispatch(delItem(product))
         setCartBtn("Add TO Cart")
     }
}


const ShowProducts=()=>{
    return(
        <>
        <div className="col-md-6">
            <img src={product.image} alt={product.title} height="400px" width="400px"/>
        </div>
        <div className="col-md-6">
            <h4 className='text-uppercase text-black-50'>
            {product.catrgory}
            </h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='lead fe-bolder'>
                Rating {product.rating && product.rating.rate}
                <i className='fa faa-star'></i>
            </p>
            <h3 className='display-6 fe-bold my-4'>
            ₹{product.price}
            </h3>
            <p className="lead">{product.description}</p>
            <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
        </div>
        </>
    )
}
    

  return (
   <>
   <div className="container my-5 py-3">
       <div className="row">
       {loading ? <Loading/> : <ShowProducts/>}
       </div>
   </div>
   </>
  )
}

export default ProductDetail

