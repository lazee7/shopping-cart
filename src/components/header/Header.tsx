import Icons from '../../constants/Icons';
import useCart from '../../hooks/useCart';
import Button from '../button/Button';

const Header = () => {
  const { updateShowCart, totalItems } = useCart();
  return (
    <div>
      <h1>header</h1>
      <Button
        onClick={updateShowCart}
        className='relative flex gap-1 items-center'
      >
        <Icons.cart />
        <span className='bg-accent rounded-lg p-2 w-4 h-4 font-mono absolute -top-1 -right-2 text-xs flex items-center justify-center border-2 border-body'>
          {totalItems}
        </span>
      </Button>
    </div>
  );
};

export default Header;
