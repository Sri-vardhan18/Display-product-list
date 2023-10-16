import React, { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import Model from './Model';

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

  const closeCart = () => {
    setShowCart(false);
    setCount(0)
  };

  return (
    <div>
      <Navbar onOpenCart={openCart} counts={count}/>
      <div className="productList">
        {products.map((item) => (
          <div key={item.id} className="productContainer">
            <ProductCard item={item} addToCart={addToCart} /> 
            
          </div>
        ))}
      </div>
      {showCart && (
        <Model carts={cart} popup={closeCart} removeitem={removeFromCart} />

      )}
    </div>
  );
};

export default ProductList;
