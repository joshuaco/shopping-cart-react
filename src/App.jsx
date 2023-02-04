import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Title from './components/Title';

function App() {
  const [products, setProducts] = useState([
    { name: 'Tomatoes', price: 5000, img: '/img/tomates.png' },
    { name: 'Green Lettuce', price: 3000, img: '/img/Lettuce.png' },
    { name: 'Arvejas', price: 2500, img: '/img/arvejas.png' },
  ]);

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    if (cart.find((item) => item.name === product.name)) {
      const newCart = cart.map((item) => {
        if (item.name === product.name) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return setCart(newCart);
    }
    return setCart([...cart, { ...product, quantity: 1 }]);
  };

  const showCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleRemove = (cart) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.name !== cart.name)
    );
  };

  return (
    <div className='App'>
      <Navbar cart={cart} cartOpen={cartOpen} showCart={showCart} handleRemove={handleRemove} />
      <Layout>
        <Title />
        <Products addToCart={addToCart} products={products} />
      </Layout>
    </div>
  );
}

export default App;
