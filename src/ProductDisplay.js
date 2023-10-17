import ProductCard from './ProductCard';
const ProductDisplay=({ addToCart, products})=>{
    return (
        <div className="productList">
        {products.map((item) => (
          <div key={item.id} className="productContainer">
            <ProductCard item={item} addToCart={addToCart} /> 
            
          </div>
        ))}
      </div>
    )

}

export default ProductDisplay