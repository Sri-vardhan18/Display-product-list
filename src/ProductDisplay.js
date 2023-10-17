import ProductCard from './ProductCard';
const ProductDisplay=({ addToCart, products})=>{
    return (
        <div className="productList">
        {products.map((item) => (
          <div className="productContainer"  key={item.id} >
            <ProductCard item={item} addToCart={addToCart} /> 
            
          </div>
        ))}
      </div>
    )

}

export default ProductDisplay