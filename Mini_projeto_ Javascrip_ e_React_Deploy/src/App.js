import React, { useState } from 'react';
import './App.css';
import ProductList from './productList';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckoutOpen = () => {
    setCartItems([]); // Limpar os itens do carrinho
    setIsCheckoutOpen(true);
  };
  

  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="store-name">Game Life Style</h1>
      </header>
      <div className="content">
        <div className="product-list">
          <ProductList addToCart={addToCart} cartItems={cartItems} />
        </div>
        <div className="cart">
          <h2>Carrinho de Compras</h2>
          {isCheckoutOpen ? (
            <div className="checkout">
              <p>Pedido foi finalizado. Tamo junto!</p>
              <button className="checkout-button" onClick={handleCheckoutClose}>Fechar</button>
            </div>
          ) : (
            <>
              {cartItems.length === 0 ? (
                <p>O carrinho vazio.</p>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <h3>{item.name}</h3>
                      <p>Preço: R${item.price}</p>
                      <p>Quantidade: {item.quantity}</p>
                      <button onClick={() => decrementQuantity(item.id)}>-</button>
                      <button onClick={() => incrementQuantity(item.id)}>+</button>
                      <button onClick={() => removeFromCart(item.id)}>Remover do Carrinho</button>
                    </div>
                  ))}
                  <p className="total-price">Total: R${getTotalPrice()}</p>
                  <button className="checkout-button" onClick={handleCheckoutOpen}>Finalizar</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default App;
