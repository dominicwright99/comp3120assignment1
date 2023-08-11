import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App(){
  const [products, setProducts] = useState([ ])
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])

  console.log()

  useEffect(() => {
    // Fetch products from the server
    axios.get('/products')
      .then(response => setProducts(response.data))
    
    // Fetch user's orders
    axios.get('/orders?user_id=1')
      .then(response => setOrders(response.data))
  }, []);

  

  return(
    <div className="App">
      <h1>Store</h1>
      <h2>Products</h2>
    </div>
  )
}

export default App;
