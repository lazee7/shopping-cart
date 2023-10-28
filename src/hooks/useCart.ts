import { useContext } from 'react';
import { CartContext, CartContextType } from '../contexts/CartContext';

const useCart = () => useContext(CartContext) as CartContextType;

export default useCart;
