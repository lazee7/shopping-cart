import { useState, createContext, ReactNode, useEffect } from 'react';
import useProducts from '../hooks/useProducts';

type Cart = {
  product: Product;
  quantity: number;
};

export type CartContextType = {
  cart: Cart[] | [];
  addToCart: (id: number) => void;
  showCart: boolean;
  total: number;
  decreaseQuantity: (id: number) => void;
  increaseQuantity: (id: number) => void;
  updateShowCart: () => void;
  totalItems: number;
  removeFromCart: (id: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

// const initialState = JSON.parse(localStorage.getItem('cart') as string) ?? [];

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart[] | []>([]);
  const [showCart, setShowCart] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const { products } = useProducts();

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart]);

  useEffect(() => {
    calculateTotalPrice();
    totalItemsInCart();
  }, [cart]);

  // add item to cart
  const addToCart = (id: number) => {
    const product = products?.find((product) => product.id === id) as Product;
    const isInCart = cart.find((item) => item.product.id === id);

    setCart((prev) => {
      if (isInCart?.quantity) {
        return prev.map((item) => {
          if (item.product.id === isInCart.product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
        },
      ];
    });
    // setShowCart(true);
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce(
      (sum, item) => sum + Number(item.product.price) * item.quantity,
      0
    );
    setTotal(total);
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const updateShowCart = () => {
    setShowCart((prev) => !prev);
  };

  const totalItemsInCart = () => {
    const currentTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(currentTotal);
  };

  const removeFromCart = (id: number) => {
    const updatedcart = cart.filter((item) => item.product.id !== id);
    setCart(updatedcart);
  };

  const value = {
    cart,
    addToCart,
    showCart,
    total,
    decreaseQuantity,
    increaseQuantity,
    updateShowCart,
    totalItems,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
