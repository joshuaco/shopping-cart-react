import Logo from './Logo'
import Cart from './Cart'

const Navbar = (props) => {
  const { cart, cartOpen, showCart, handleRemove } = props;
  return (
    <nav className='navbar'>
      <Logo />
      <Cart
        cart={cart}
        cartOpen={cartOpen}
        showCart={showCart}
        handleRemove={handleRemove}
      />
    </nav>
  );
};

export default Navbar;