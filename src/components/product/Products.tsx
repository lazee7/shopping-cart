import useCategories from '../../hooks/useCategories';
import useProducts from '../../hooks/useProducts';
import Cart from '../cart/Cart';
import Product from './Product';

const Products = () => {
  const { products, updateCategory } = useProducts();
  const categories = useCategories();

  return (
    <>
      {/* <Cart /> */}
      <div className='flex gap-3 my-10'>
        <button onClick={() => updateCategory('')}>all</button>
        {categories?.map((category) => (
          <button key={category} onClick={() => updateCategory(category)}>
            {category}
          </button>
        ))}
      </div>{' '}
      <section className='grid md:grid-cols-4'>
        {products?.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </>
  );
};

export default Products;
