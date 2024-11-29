import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {removeFromCart, clearCart, updateCartItemCount, loadCartFromLocalStorage} from '../../redux/cartAction';
import Button from './Button';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);

  const handleRemove = (id, selectedColor, selectedYear) => {
    dispatch(removeFromCart({id, selectedColor, selectedYear}));

  };

  const handleUpdateCount = (id, selectedColor, selectedYear, newCount) => {
    dispatch(updateCartItemCount({id, selectedColor, selectedYear, newCount}));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };
  const handleDecrease = (item) => {
    if (item.count === 1) {
      // Показуємо підтвердження
      const confirmDelete = window.confirm(
        "Are you sure you want to remove this item from the cart?"
      );

      if (confirmDelete) {
        // Якщо користувач натискає "Yes", видаляємо товар
        handleRemove(item.id, item.selectedColor, item.selectedYear);  // Викликайте функцію для видалення товару
      } else {
        // Якщо користувач натискає "No", просто повертаємося назад
        return;
      }
    } else {
      // Якщо кількість більша за 1, зменшуємо кількість
      handleUpdateCount(item.id, item.selectedColor, item.selectedYear, item.count - 1);
    }
  };


  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty :(</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedColor}-${item.selectedYear}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image"/>
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-color">Color: {item.selectedColor}</p>
                  <p className="cart-item-year">Year: {item.selectedYear}</p>
                  <p className="cart-item-price">Price per car: ${item.price.toFixed(2)}</p>
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-button"
                      onClick={() =>
                        handleUpdateCount(item.id, item.selectedColor, item.selectedYear, item.count + 1)
                      }
                    >
                      +
                    </button>
                    <span> {item.count} </span>
                    <button className="quantity-button" onClick={() => handleDecrease(item)}>
                      -
                    </button>
                  </div>
                  <p className="cart-item-total">Total: ${(item.price * item.count).toFixed(2)}</p>
                  <Button
                    className="remove-button"
                    onClick={() => handleRemove(item.id, item.selectedColor, item.selectedYear)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Price: ${getTotalPrice()}</p>
            <Button className="clear-cart-button" onClick={handleClearCart}>
              Clear Cart
            </Button>
            <Button className="checkout-button" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;