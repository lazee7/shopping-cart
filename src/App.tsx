import Header from './components/header/Header';
import { Toaster } from 'react-hot-toast';
import Products from './components/product/Products';
import useCart from './hooks/useCart';
import Cart from './components/cart/Cart';

function App() {
  const { showCart } = useCart();
  return (
    <main>
      <Toaster />
      <Header />
      <Products />
      {showCart && <Cart />}
    </main>
  );
}

export default App;
