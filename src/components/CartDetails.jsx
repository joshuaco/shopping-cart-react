import ButtonRemove from "./ButtonRemove";

const CartDetails = (props) => {
  const { cart, handleRemove } = props;
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log(cart);
  return (
    <div className='cart-details'>
      <ul>
        {cart.map((item) => (
          <li key={item.name}>
            <img className='cart-img' src={item.img} alt={item.name} />
            {item.name}
            <span>x{item.quantity}</span>
            <ButtonRemove handleRemove={handleRemove} item={item} />
          </li>
        ))}
        {totalAmount > 0 ? (
          <li className='total-amount'>
            <span>Total</span>
            <span>{totalAmount}$</span>
          </li>
        ) : (
          <li className='empty-cart'>Your cart is empty</li>
        )}
      </ul>
    </div>
  );
}

export default CartDetails;