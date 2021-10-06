import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {Link} from '@reach/router'

const ProductsList = ({products }) => {

    

    return (
        <div>
            {
                products.map((value, index)=>{
                    return <ul>
                    <a href={'/product/details/'+ value.id} ><li key={index}>{value.name}</li></a>
                    <li>{value.price}</li>
                    <li> {value.availablity}</li>
                    <li>{value.quantity}</li>
                    </ul>
                })
            }
        </div>
    )
}

export default ProductsList
