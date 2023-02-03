const CartDetails = (props) => {
  const { cart } = props;
  return (
    <div className="cart-details">
      <ul>
        {cart.map((item) => (
          <li key={item.name}>
            <img className="cart-img" src={item.img} alt={item.name} />
            {item.name}
            <span>x{item.quantity}</span>
          </li>  
        ))}
      </ul>
    </div>
  );
}

export default CartDetails;