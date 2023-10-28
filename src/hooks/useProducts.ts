import {
  ProductsConextType,
  ProductsContext,
} from '../contexts/ProductsContext';
import { useContext } from 'react';

const useProducts = () => useContext(ProductsContext) as ProductsConextType;

export default useProducts;
