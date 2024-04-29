import './Banner.css';

import PropTypes from 'prop-types';

function Banner({ imageUrl, bg, children }) {
  return (
    <article className="banner">
      <div className={`banner-text-content ${bg ?? ''}`}>{children}</div>
      <div className="banner-image" style={{ backgroundImage: 'url(' + imageUrl + ')' }}>
      </div>
    </article>
  );
}

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  bg: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Banner;
