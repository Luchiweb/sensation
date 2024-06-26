import './Header.css';

import logo from '../../assets/icons/logo.svg';
import dendalion from '../../assets/icons/logo-dendalion.svg';
import cart from '../../assets/icons/cart.svg';
import { useState } from 'react';

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <div className={`header container ${isNavVisible ? 'nav-visible' : ''}`}>
      <button className="burger-menu" aria-label="Toggle menu" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="#" className="logo">
        <img className="logo-text" src={logo} alt="logo" />
        <img className="logo-dendalion" src={dendalion} alt="dendalion" />
      </a>
      <nav className="navbar">
        <a href="#">About us</a>
        <a href="#">Photo Books</a>
        <a href="#">Prints & Frames</a>
        <a href="#">Wall art</a>
      </nav>
      <a href="#" className="cart">
        <img src={cart} alt="cart" />
      </a>
      <div className="backdrop" onClick={toggleNav}></div>
    </div>
  );
}
export default Header;
