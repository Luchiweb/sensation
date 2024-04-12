import Button from '../Button/Button';
import CircleIcon from '../CircleIcon/CircleIcon';

import star from '../../assets/icons/busy-star.svg';
import selection from '../../assets/icons/photo-selection.svg';
import design from '../../assets/icons/design.svg';
import book from '../../assets/icons/book.svg';
import size from '../../assets/icons/size.svg';
import price from '../../assets/icons/price.svg';

import './HowItWorks.css';

const HowItWorks = () => {
  const busyness = 3;

  const promotionTexts = {
    5: 'Book the designer to get the book to you in time for December',
    4: 'get 15% off Design Services',
    3: 'get 20% off Design Services',
    2: 'get 30% off Design Services',
  };

  function stars() {
    let starArr = [];
    for (let i = 0; i < 5; i++) {
      const className = busyness - i > 0 ? 'star' : 'star gray';
      starArr.push(className);
    }
    return starArr;
  }

  return (
    <section className="howItWorks-container">
      <div className="howItWorks-titles">
        <h5>how it works</h5>
        <h2>Create your wedding book with our pro team</h2>
      </div>
      <div className="howItWorks-steps">
        <div className="step step-one">
          <div className="icon-part">
            {/* <div className="icon-title">Order a design of your wedding book</div> */}
            <div className="icons">
              <CircleIcon imgUrl={selection} title="photo selection" />
              <CircleIcon imgUrl={design} title="photobook design" />
            </div>
            <Button link="#" text="Order design" size="small" state="transparent" />
            <div className="block"></div>
          </div>
          <div className="text-part">
            <div className="blur">
              <h3>All Starts With Design</h3>
              <p>order a design of your wedding book</p>
            </div>
          </div>
        </div>
        <div className="step step-two">
          <div className="text-part">
            <div className="blur">
              <h3>After Design</h3>
              <p>print a luxury wedding photo book</p>
            </div>
          </div>
          <div className="icon-part">
            {/* <div className="icon-title">Print a luxury wedding photo book</div> */}
            <div className="icons">
              <CircleIcon imgUrl={book} title="any cover" />
              <CircleIcon imgUrl={size} title="any size" />
              <CircleIcon imgUrl={price} title="from $300" />
            </div>
            <Button link="#" text="Calculate price" size="small" state="transparent" />
            <div className="block"></div>
          </div>
        </div>
        <div className="promotion">
          <div className="promotion-busy">
            <span>service is busy at</span>
            <div className="stars">
              {stars().map((className, id) => (
                <img src={star} className={className} key={id} />
              ))}
            </div>
          </div>
          <h3 className="promotion-text">{promotionTexts[busyness]}</h3>
          <div className="promotion-buttons">
            <Button link="#" text="Book free consultation" size="small" state="transparent" />
            <Button link="#" text="Order a design" size="small" />
          </div>
          <div className="block"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
