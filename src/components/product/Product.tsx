import useCart from '../../hooks/useCart';
import Button from '../button/Button';

const Product = (props: Product) => {
  const { addToCart } = useCart();
  const { title, id, price, image } = props;
  return (
    <article className='group md:min-h-96 flex flex-col gap-3 md:gap-5'>
      <div className=' w-full  h-72'>
        <img
          src={image}
          alt={`picture of a ${title} clothing`}
          className='object-cover w-full h-full rounded-md py-2'
        />
      </div>
      <p className='font-semibold'>{title}</p>

      <p className='text-accent font-medium'>${price}</p>
      <Button
        onClick={() => addToCart(id)}
        className='bg-black text-white w-full py-3 rounded-sm group-hover:bg-active mt-auto'
      >
        Add to cart
      </Button>
    </article>
  );
};

export default Product;
