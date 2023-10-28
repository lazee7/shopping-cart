import Icons from '../../constants/Icons';
import useCategories from '../../hooks/useCategories';
import useProducts from '../../hooks/useProducts';
import Button from '../button/Button';
import Product from './Product';

const Products = () => {
  const {
    products,
    updateCategory,
    category: currentCategory,
    isLoading,
  } = useProducts();
  const categories = useCategories();

  return (
    <div className='md:flex md:gap-10'>
      <div className='flex gap-2 my-10 overflow-x-scroll md:overflow-hidden pb-4 border-b border-primary/50 md:flex-col md:min-w-fit md:border-b-0'>
        <Button
          onClick={() => updateCategory('')}
          className={`${
            !currentCategory && 'bg-active'
          }  rounded-lg px-2 capitalize`}
        >
          <span>all</span>
        </Button>
        {categories?.map((category) => (
          <Button
            key={category}
            onClick={() => updateCategory(category)}
            className={`${
              category === currentCategory && 'bg-active'
            }  rounded-lg px-2 min-w-fit capitalize`}
          >
            <span className='text-sm font-mono'> {category}</span>
          </Button>
        ))}
      </div>{' '}
      <section className='grid md:grid-cols-4 grid-cols-2 gap-2'>
        {isLoading ? (
          <div className='place-self-center col-span-2 py-40 md:col-span-4 md:p-52'>
            <Icons.loader className='animate-spin' />
          </div>
        ) : (
          products?.map((product) => {
            return <Product key={product.id} {...product} />;
          })
        )}
      </section>
    </div>
  );
};

export default Products;
