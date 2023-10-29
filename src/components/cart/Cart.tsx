import Icons from '../../constants/Icons';
import useCart from '../../hooks/useCart';
import Button from '../button/Button';

export default function Cart() {
  const { cart, total, updateShowCart, totalItems } = useCart();
  return (
    <main className='fixed bg-primary top-0 bottom-0 right-0 w-full md:w-1/2 text-secondary pt-10 px-10 h-full overflow-y-auto lg:w-1/3 z-[100] transition-all animate-slide-in rounded-s-2xl'>
      <div className='relative before:content-[""] before:absolute before:-top-9 before:-left-9 before:rounded-full  before:w-5 before:h-5 before:bg-secondary hover:before:bg-active/60'>
        <header className='flex justify-between items-center mb-7 '>
          <Button
            onClick={updateShowCart}
            className='group hover:text-red-500 text-accent'
          >
            <Icons.close size={40} />
          </Button>
          <h2 className='capitalize font-semibold text-xl'>cart</h2>
          <p className='relative flex gap-1 items-center'>
            <Icons.cart />
            <span className='bg-accent rounded-lg p-2 w-4 h-4 font-mono absolute -top-1 -right-2 text-xs flex items-center justify-center border-2 border-primary'>
              {totalItems}
            </span>
          </p>
        </header>
        <div className='flex flex-col gap-4'>
          {cart.length > 0 ? (
            cart.map(({ product, quantity }) => {
              return (
                <CartItem quantity={quantity} {...product} key={product.id} />
              );
            })
          ) : (
            <p className='text-center py-10 leading-8 tracking-wider'>
              cart is currently empty...
            </p>
          )}
        </div>
        {cart.length > 0 && (
          <div className=' bg-tertiay w-full my-7 flex justify-between items-center p-5 rounded-md'>
            <p>SubTotal:</p>
            <p>${total.toFixed(2)}</p>
          </div>
        )}
      </div>
    </main>
  );
}

type CartItemProp = {
  id: number;
  image: string;
  title: string;
  quantity: number;
  price: string;
};

const CartItem = (props: CartItemProp) => {
  const { id, image, title, quantity, price } = props;

  const displayedTitle =
    title.length > 25 ? `${title.substring(0, 25)}...` : title;
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const totalPrice = Number(price) * quantity;
  return (
    <div className='flex gap-3 items-center border-b py-4 border-tertiay '>
      <div className='min-w-[7rem] h-28 rounded-xl border border-accent p-1'>
        <img
          src={image}
          alt=''
          className='object-cover w-full h-full rounded-xl border-x '
        />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-medium'>{displayedTitle}</p>
        <p className='text-accent'>${totalPrice.toFixed(2)}</p>

        <div className='flex items-center gap-3 '>
          <Button
            onClick={() => decreaseQuantity(id)}
            disabled={quantity === 1}
            className=' group'
          >
            <Icons.minus className='group-disabled:text-tertiay group-hover:text-accent' />
          </Button>
          <p>{quantity}</p>
          <Button onClick={() => increaseQuantity(id)} className='group'>
            <Icons.plus className='group-hover:text-accent' />
          </Button>
        </div>
      </div>
      <Button onClick={() => removeFromCart(id)} className='ml-auto group'>
        <Icons.delete className='group-hover:text-accent' />
      </Button>
    </div>
  );
};
