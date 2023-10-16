import React from 'react';

const ProductCard = ({ item, addToCart }) => {
  const {  name,  price,    description, imageUrl,  } = item;

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="Card">
      <img src={imageUrl} alt={name} />
      <h5>{name}</h5>
      <p>{description}</p>
      <span>${price}</span><br/>
      <button onClick={handleAddToCart}>Add to Cart</button> 
    </div>
  );
};

export default ProductCard;
