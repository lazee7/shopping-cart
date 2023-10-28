import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { API_URL } from '../constants/data';
import toast from 'react-hot-toast';

export type ProductsConextType = {
  products: Product[] | null;
  isLoading: boolean;
  updateCategory: (value: string) => void;
};

export const ProductsContext = createContext<ProductsConextType | null>(null);

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    setIsLoading(true);
    const url = !category ? 'products' : `products/category/${category}`;
    try {
      const response = await axios.get(`${API_URL}${url}`);

      if (response.status === 200) {
        setProducts(response.data);
      } else {
        toast.error('error fetching products');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCategory = (value: string) => {
    setCategory(value);
  };

  const value = {
    products,
    isLoading,
    updateCategory,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
