const Model = ({ popup, carts, removeitem }) => {
  const HandlecloseCart = () => {
    popup();
  };

  const handleremove = (item) => {
    removeitem(item);
  };
  return (
    <div className="cartModal">
      <div className="cartContent">
        <h3>Cart Items</h3>
        <ul>
          {carts.map((item) => (
            <li key={item.id} className="product-item">
              {item.name} -  ${item.price}
              <button className="buttonClass" onClick={() => handleremove(item)}><span>❌</span></button>
            </li>
          ))}
        </ul>
        <button onClick={HandlecloseCart}>Close Cart</button>
      </div>
    </div>
  );
}; 

export default Model;
