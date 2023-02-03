import Logo from './Logo'
import Cart from './Cart'

const Navbar = (props) => {
  const { cart, cartOpen, showCart } = props;
  return (
    <nav className="navbar">
      <Logo />
      <Cart cart={cart} cartOpen={cartOpen} showCart={showCart} />
    </nav>
  )
};

export default Navbar;