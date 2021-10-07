import React,{useState} from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const CreateProduct = (props) => {
    const [name, setName]= useState('')
    const [price, setPrice]= useState('')
    const [availability, setAvailability]= useState()
    const [quantity, setQuantity]= useState(0)

    const addProduct = async (e) =>{
        e.preventDefault()
        const Product = await {
            name: name,
            price: price,
            availability: availability,
            quantity: quantity,}
        axios.post('http://localhost:8000/api/products/createget', Product)  
        .then(res => {
        console.log(res)
        props.send(Product)})
    }
    return (
        <div>
            <form onSubmit={addProduct}>
                <label>
                    Name: 
                </label>
                <input type='text' name='name' onChange={(e) => setName(e.target.value)}/>
                <label>
                    Price: 
                </label>
                <input type='text' name='price' onChange={(e) => setPrice(e.target.value)}/>
                <label>
                    Availability: 
                </label>
                <input type='checkbox' name='availability'onChange={(e) => setAvailability(e.target.value)}/>
                <label>
                    Quantity: 
                </label>
                <input type='text' name='quantity' onChange={(e) => setQuantity(e.target.value)}/>
                <input type='submit' value='submit' />

            </form>
            
        </div>
    )
}

export default CreateProduct
