import React,{useState,useEffect} from 'react'
import axios from 'axios'
const ProductDetails = (props) => {
    
    const [product, setProduct] = useState([])
    const [render, rerender] = useState(false);

    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' +props.id)
        .then(res => {
            setProduct(res.data)})

    },[render])

    const decrement = () => {
        axios.put('http://localhost:8000/api/productsU/' + props.id)
        .then(res => {console.log("decremented")
        rerender(!render);

        
    })
    }
  
    return (

        <div>
            <h2>details</h2>
           <h2>{product.name}</h2>
           <h2>{product.price}</h2>
           <h2>{product.availability ? "available" : "not available"}</h2>
           <h2>{product.quantity > 0 ? product.quantity : "not available anymore"}</h2>
           <button onClick={decrement}>decrement</button>
            
        </div>
    )
}

export default ProductDetails
