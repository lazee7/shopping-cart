import Header from './components/header/Header';
import { Toaster } from 'react-hot-toast';
import Products from './components/product/Products';
import useCart from './hooks/useCart';
import Cart from './components/cart/Cart';

function App() {
  const { showCart } = useCart();
  return (
    <main className='px-5 pt-7 pb-3'>
      <Toaster />
      <Header />
      <Products />

      {showCart && <Cart />}
      <footer className='flex justify-center items-center pt-16 pb-2 flex-col gap-1 md:flex-row md:gap-7'>
        <p className='text-sm'>
          made with <span className=' text-accent'>❤</span> by lazee &copy;
          2023.
        </p>
        <p className='text-xs'>
          products data from{' '}
          <a
            href='https://fakestoreapi.com/'
            target='_blank'
            referrerPolicy='no-referrer'
            className='underline text-blue-500'
          >
            fakeStore api
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
