import { useDeferredValue, useMemo, useState } from 'react';
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
  const [search, setSearch] = useState('');
  const query = useDeferredValue(search);

  const filteredProducts = useMemo(() => {
    return products
      ?.filter((product) => Number(product.price) >= Number(query))
      .sort((a, b) => Number(a.price) - Number(b.price));
  }, [products, query]);
  return (
    <div className='md:flex md:gap-10 relative'>
      <div className='flex gap-2 mt-10 mb-7 overflow-x-scroll md:overflow-hidden pb-4 border-b border-primary/50 md:flex-col md:min-w-fit md:border-b-0 sticky top-10'>
        <Button
          onClick={() => updateCategory('')}
          className={`${
            !currentCategory && 'bg-active'
          }  rounded-lg px-2 capitalize md:hover:bg-active/40 py-2 outline-none border-none transition-colors duration-75`}
        >
          <span>all</span>
        </Button>
        {categories?.map((category) => (
          <Button
            key={category}
            onClick={() => updateCategory(category)}
            className={`${
              category === currentCategory && 'bg-active'
            }  rounded-lg px-2 min-w-fit capitalize md:hover:bg-active/40 py-2 outline-none border-none transition-colors duration-75`}
          >
            <span className='text-sm font-mono'> {category}</span>
          </Button>
        ))}
      </div>{' '}
      <div>
        {!isLoading && (
          <div className='pb-7 flex justify-end gap-2 items-center mb-4'>
            <input
              type='number'
              name='search'
              id='search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='outline-none rounded-lg w-20 placeholder:capitalize px-3  bg-secondary/50 py-1 text-sm'
              placeholder='price'
            />
            <Icons.filter className='text-accent font-semibold ' />
          </div>
        )}
        <section className='grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5'>
          {isLoading ? (
            <div className='place-self-center col-span-2 py-40 md:col-span-4 md:p-52'>
              <Icons.loader className='animate-spin' />
            </div>
          ) : filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts?.map((product) => {
              return <Product key={product.id} {...product} />;
            })
          ) : (
            <p className='text-center col-span-2 md:col-span-4'>
              empty result...
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;
