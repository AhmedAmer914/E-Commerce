import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext()

export default function CartProvider({ children }) {


  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [] 
  })

  //increaseQuantity if item already in cart

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  //decreaseQuantity if item already in cart
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };


  //removeFromCart

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }






  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, {...item, quantity: 1}]);
  }

  useEffect(() => {
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart , increaseQuantity , decreaseQuantity ,removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}


