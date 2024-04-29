import './Footer.css';

import logo from '../../assets/icons/logo.svg';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-subscription">
        <a href="#" className="logo">
          <img className="logo-text" src={logo} alt="logo" />
        </a>
        <div className="footer-form">
          <label htmlFor="newsletter">Subscribe to our newsletter</label>
          <input type="email" placeholder="your email" name="newsletter" id="newsletter" />
        </div>
      </div>
      <nav className="footer-navbar">
        <div className="footer-column">
          <div>Products</div>
          <ul>
            <li>
              <a href="#">Premium Photobook</a>
            </li>
            <li>
              <a href="#">Thank You Book</a>
            </li>
            <li>
              <a href="#">Guest Book</a>
            </li>
            <li>
              <a href="#">Luxury Paspartu</a>
            </li>
            <li>
              <a href="#">Wall Art</a>
            </li>
            <li>
              <a href="#">Photo Souvenirs</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <div>Special offers</div>
          <ul>
            <li>
              <a href="#">Sensation Gifts Club</a>
            </li>
            <li>
              <a href="#">Design Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <div>Details</div>
          <ul>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
export default Footer;
