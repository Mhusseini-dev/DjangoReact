import React,{useState} from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../App.css';



const CreateProduct = (props) => {
    const [name, setName]= useState('')
    const [price, setPrice]= useState('')
    const [availibilty, setAvailability]= useState(true)
    const [quantity, setQuantity]= useState(0)

    const addProduct = async (e) =>{
        e.preventDefault()
        const Product = await {
            name: name,
            price: price,
            availibilty: availibilty,
            quantity: quantity,}
        axios.post('http://localhost:8000/api/products/createget', Product)  
        .then(res => {
        console.log(res)
        props.send(Product)})
    }
    return (
        <div className="form">
            <center>
            <form onSubmit={addProduct}>
            <FormGroup>
        <Label for="Name">name</Label>
        <Input type="text" name="email" id="name" placeholder="Name"  onChange={(e)=> setName(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="Price">Price</Label>
        <Input type="text" name="price" id="price" placeholder="price " onChange={(e)=> setPrice(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="Price">Availability</Label>
        <Input type="checkbox" name="availability" id="checkbox"  onChange={(e)=> setAvailability(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="Quantity">Quantity</Label>
        <Input type="number" name="quantity" id="quantity" placeholder="1 " onChange={(e)=> setQuantity(e.target.value)}/>
      </FormGroup>
      <Button type='submit' color="primary">Create</Button>

            </form>
            </center>
        </div>
    )
}

export default CreateProduct
