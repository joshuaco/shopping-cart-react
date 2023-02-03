import Button from './Button';

const Product = ({ addToCart, product }) => {
  return (
    <div className="product">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>
    </div>
  )
}

export default Product;