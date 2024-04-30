import './Banner.css';

import PropTypes from 'prop-types';

function Banner({ imageUrl, bg, children, direction }) {
  return (
    <article className={`banner ${direction ?? ''}`}>
      <div className={`banner-text-content ${bg ?? ''}`}>{children}</div>
      <div className="banner-image" style={{ backgroundImage: 'url(' + imageUrl + ')' }}>
      </div>
    </article>
  );
}

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  direction: PropTypes.string,
};
export default Banner;
