import { Link } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
// import SearchIcon from '@mui/icons-material/Search';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useState, useEffect } from "react";

import './css/Header.css';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Initial cart count
    updateCartCount();


    // Add event listener for storage changes
    window.addEventListener('storage', updateCartCount);

    // Cleanup
    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  // =========================Cart count============================
  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartItems.length);
  };
  // =========================Cart count End============================

  // =========================Search Toggle============================
  // const [showSearch, setShowSearch] = useState(false);
  // const toggleSearch = () => {
  //   setShowSearch(!showSearch);
  // };
  // =========================Search Toggle End============================
  
    return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-6">
              <a href="tel:800-285-3051"><CallIcon /> 800-285-3051</a>
            </div>
            <div className="col-md-6">
              <div className="social">
                <ul className="d-flex align-items-center gap-3 justify-content-end">
                  {/* <li>
                    <div className="d-flex align-items-center position-relative search-box">
                      <input
                        type="text"
                        placeholder="Search your product..."
                        className={`search-input ${showSearch ? 'active' : ''}`}
                      />
                      <SearchIcon onClick={toggleSearch} />
                    </div>
                  </li> */}
                  {/* <li><FavoriteBorderIcon /></li> */}
                  <li className="cart-icon position-relative"><ShoppingCartCheckoutIcon />
                    <span>{cartCount}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="bottom-header">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/"><img src="/images/logo.png" alt="logo" /></Link>
          </div>
          <nav className="nav-links d-flex gap-5">
            <Link to="/">Home</Link>
            <Link to="/products">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;




