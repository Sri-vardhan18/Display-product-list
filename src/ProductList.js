import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import ProductDisplay from './ProductDisplay';
import Model from './Model';
import  ReactDOM  from 'react-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [count, setCount]=useState(0)

  useEffect(() => {
    fetchProducts();
  }, []);
  

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://3.7.252.58:4001/product/getAllProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8',
        },
        body: JSON.stringify({
          limit: 100,
          page: 0,
          search: '',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCount(count+1)
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item._id !== product._id);
    setCart(updatedCart);
    setCount(count-1)
  };
  
  const openCart = () => {
    setShowCart(true);
  };

  const portal=document.getElementById('portal')
  const closeCart = () => {
    setShowCart(false);
    setCount(0)
  };

  return (
    <div>
      <Navbar onOpenCart={openCart} counts={count}/>
      <ProductDisplay  addToCart={addToCart} products={products}/>
      {showCart && ReactDOM.createPortal(
        <Model carts={cart} popup={closeCart} removeitem={removeFromCart} ></Model>,portal

      )}
    </div>
  );
};

export default ProductList;
