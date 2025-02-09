import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          🛍️ Ramzi Shop
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-item">
            Products
          </Link>
          <Link to="/cart" className="nav-item cart-link">
            Cart 🛒 <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
