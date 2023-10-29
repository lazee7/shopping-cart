import useCart from '../../hooks/useCart';
import Button from '../button/Button';

const Product = (props: Product) => {
  const { addToCart } = useCart();
  const { title, id, price, image, description } = props;
  return (
    <article className='group md:min-h-96 flex flex-col gap-3 md:gap-5'>
      <div className='h-72 w-full perspective-1000 group/flip'>
        <div className='relative w-full h-full transition-transform duration-500 transform-style-3d group-hover/flip:rotate-y-180'>
          <div className=' w-full  h-full absolute backface-hidden bg-white  rounded-lg'>
            <img
              src={image}
              alt={`picture of a ${title} clothing`}
              className='object-cover w-full h-full rounded-md py-2'
            />
          </div>

          <div className=' w-full  h-full absolute backface-hidden bg-gradient-to-br from-primary to-active via-primary text-secondary rotate-y-180 overflow-hidden px-2 py-3 rounded-lg'>
            <p className='text-sm leading-6'>{description}</p>
          </div>
        </div>
      </div>
      <p className='font-semibold relative after:content-[""] after:w-10 after:absolute after:border-accent after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:border-b-2 py-2 min-h-[7rem]'>
        {title}
      </p>

      <p className='text-accent font-medium text-center'>${price}</p>
      <Button
        onClick={() => addToCart(id)}
        className='bg-black text-white w-full py-3 rounded-sm group-hover:bg-active mt-auto outline-none border-none transition-colors duration-200 ease-in-out'
      >
        Add to cart
      </Button>
    </article>
  );
};

export default Product;
