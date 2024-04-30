import Banner from '../Banner/Banner';
import Button from '../Button/Button';
import CircleIcon from '../CircleIcon/CircleIcon';

import manager from '../../assets/icons/manager.svg';
import selection from '../../assets/icons/photo-selection.svg';
import design from '../../assets/icons/design.svg';
import book from '../../assets/icons/book.svg';
import size from '../../assets/icons/size.svg';
import price from '../../assets/icons/price.svg';
import hiw1 from '../../assets/images/hiw-bg1.jpg';
import hiw2 from '../../assets/images/hiw-bg2.jpg';
import wedBox from '../../assets/images/wedding-box.jpg';

import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <div className="howItWorks-container">
        <div className="howItWorks-titles">
          <h5>your book our work</h5>
          <h2>How it works</h2>
        </div>
        <div className="howItWorks-steps">
          <Banner imageUrl={hiw1} bg="white" direction="reverse">
            <div className="step-content">
              <div className="step-number">1</div>
              <div>
                <h6>all starts with design</h6>
                <h3>Order a bespoke design of your wedding book</h3>
              </div>
              <div className="step-icons">
                <div className="icon-service">
                  <CircleIcon imgUrl={manager} title="online advicory" />
                  <span>free</span>
                </div>
                <div className="icon-service">
                  <CircleIcon imgUrl={design} title="photobook design" />
                  <span>$98</span>
                </div>
                <div className="icon-service">
                  <CircleIcon imgUrl={selection} title="photo selection" />
                  <span>$140</span>
                </div>
              </div>
              <Button
                link="#"
                text="Get 30% off Design Services"
                size="small"
                state="transparent"
              />
            </div>
          </Banner>
          <Banner imageUrl={hiw2} bg="white">
            <div className="step-content">
              <div className="step-number">2</div>
              <div>
                <h6>After design</h6>
                <h3>Print a luxury wedding photo book</h3>
              </div>
              <div className="step-icons">
                <CircleIcon imgUrl={book} title="Any cover" />
                <CircleIcon imgUrl={size} title="Any size" />
                <CircleIcon imgUrl={price} title="from $300" />
              </div>
              <Button link="#" text="Calculate price" size="small" state="transparent" />
            </div>
          </Banner>
          <Banner imageUrl={wedBox} bg="white" direction="reverse">
            <div className="step-content">
              <div className="step-number">3</div>
              <div>
                <h6>Extra Service</h6>
                <h3>Get Big Wedding Box</h3>
                <div className="step-info">
                  <p>put together a box of gifts and gratitude for those you care about</p>
                  <a href="#" className="link">
                    on special terms
                  </a>
                </div>
              </div>
            </div>
          </Banner>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
