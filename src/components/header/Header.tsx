import Icons from '../../constants/Icons';
import useCart from '../../hooks/useCart';
import Button from '../button/Button';

const Header = () => {
  const { updateShowCart, totalItems } = useCart();
  return (
    <header className='flex justify-between items-center mb-10 sticky top-4 py-4 bg-body md:w-3/6 md:mx-auto rounded-xl px-5 shadow-sl z-50'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-active to-accent text-xl font-bold'>
        zeeMart
      </h1>
      <Button
        onClick={updateShowCart}
        className='relative flex gap-1 items-center'
      >
        <Icons.cart />
        <span className='bg-accent rounded-lg p-2 w-4 h-4 font-mono absolute -top-1 -right-2 text-xs flex items-center justify-center border-2 border-body'>
          {totalItems}
        </span>
      </Button>
    </header>
  );
};

export default Header;
