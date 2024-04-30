import Banner from '../Banner/Banner';

import world from '../../assets/images/world.jpg';
import letter from '../../assets/icons/letter.svg';

import './Shipping.css';

function Shipping() {
  return (
    <div className="shipping-container">
      <Banner imageUrl={world}>
        <div className="shipping-info">
          <h2>Manufacturing & Shipping</h2>
          <div className="links">
            <a href="#">Europe</a>
            <a href="#">Canada</a>
            <a href="#">USA</a>
          </div>
          <div className="contact">
            <img src={letter} alt="" />
            <div>
              <a href="#">contact manager</a> for shipping to other regions
            </div>
          </div>
        </div>
      </Banner>
    </div>
  );
}

export default Shipping;
