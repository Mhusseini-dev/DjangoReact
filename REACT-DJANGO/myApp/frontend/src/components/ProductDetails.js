import React,{useState,useEffect} from 'react'
import axios from 'axios'
const ProductDetails = (props) => {
    
    const [product, setProduct]=useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' +props.id)
        .then(res => {
            setProduct(res.data)})

    },[])
  
    return (

        <div>
            <h2>details</h2>
           <h2>{product.name}</h2>
           <h2>{product.price}</h2>
            
        </div>
    )
}

export default ProductDetails
