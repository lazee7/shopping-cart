import useCart from '../../hooks/useCart';

const Product = (props: Product) => {
  const { addToCart } = useCart();
  const { title, id, price, image } = props;
  return (
    <article className='group'>
      <div className='w-32 h-32'>
        <img
          src={image}
          alt={`picture of a ${title} clothing`}
          className='object-cover w-full h-full '
        />
      </div>
      <div>
        <p>{title}</p>
      </div>
      {/* <div className='hidden group-hover:block transition-all duration-300 ease-in-out'>
        <p>{description}</p>
      </div> */}
      <div>
        <p>{price}</p>
      </div>
      <div>
        <button onClick={() => addToCart(id)}>add to cart</button>
      </div>
    </article>
  );
};

export default Product;
