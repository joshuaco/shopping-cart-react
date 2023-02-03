import Product from "./Product.jsx";

const Products = ({addToCart, products}) => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <Product
            addToCart={addToCart}
            key={product.name}
            product={product}
          />
        );
      })}  
    </div>
  )
}

export default Products;