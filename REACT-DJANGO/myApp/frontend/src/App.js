import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import CreateProduct from './components/CreateProduct';
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Router} from '@reach/router'
import ProductDetails from './components/ProductDetails';

function App() {
  const [Iproduct, setIproduct]= useState([])
  
  const callback = (product)=>{
    setIproduct(prev =>[...prev,product])
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/createget")
    .then(res => {
        console.log(res)
        setIproduct(res.data)
    })
},[])
  return (
    <div className="App">
      
     <Header />
    
     <Router>
     
     <CreateProduct path='products' send={callback}/>
     <ProductsList  path='products' products={Iproduct}/>
      <ProductDetails path='product/details/:id'/>
      
     

     </Router>
    </div>
  );
}

export default App;
