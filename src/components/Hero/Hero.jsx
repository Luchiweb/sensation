import './Hero.css';

import videoBG from '../../assets/hero.mp4';
import scroll from '../../assets/icons/scroll.svg';
import Button from '../Button/Button';

function Hero() {
  return (
    <section className="hero">
      <video src={videoBG} autoPlay muted loop></video>
      <div className="hero-container">
        <div className="hero-text">
          <h5>by sensation album</h5>
          <h1>Wedding Photobook Service in Canada</h1>
          <p>
            The first personalized offerings service. Specializing in premium wedding photo books,
            professional printing and handmade elegance.
          </p>
        </div>
        <div className="hero-buttons">
          <Button link="#" text="Preserve wedding memories" size="large" />
          <a href="#" className="link">
            Not from Canada? See other regions
          </a>
        </div>
      </div>
      <img className="scroll-icon" src={scroll} alt="scroll" />
    </section>
  );
}
export default Hero;
