import {
  ProductsContextType,
  ProductsContext,
} from '../contexts/ProductsContext';
import { useContext } from 'react';

const useProducts = () => useContext(ProductsContext) as ProductsContextType;

export default useProducts;
