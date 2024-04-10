import Banner from '../Banner/Banner';
import wedBox from '../../assets/images/wedding-box.jpg';

import './ExtraService.css';

function ExtraService() {
  return (
    <section className="extra">
      <div className="step-number">3</div>
      <h2>Extra Service</h2>
      <Banner imageUrl={wedBox} bg="white">
        <div className="extra-info">
          <div>
            <h4>bridal dream</h4>
            <h3>Big Wedding Box</h3>
          </div>
          <p>put together a box of gifts and gratitude for those you care about</p>
          <a href="#" className="link">
            on special terms
          </a>
        </div>
      </Banner>
    </section>
  );
}
export default ExtraService;
