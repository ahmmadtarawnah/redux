
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>🛍️ Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😞</p>
      ) : (
        <>
          <div className="cart-grid">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>
                    Price: <strong>${item.price}</strong>
                  </p>
                  <div className="cart-actions">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      disabled={item.quantity === 1}
                    >
                      ➖
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                    >
                      ➕
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>
              Total Price: <span>${totalPrice.toFixed(2)}</span>
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
