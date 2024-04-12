import './ProductCard.css';

import PropTypes from 'prop-types';
import arrow from '../../assets/icons/arrow.svg';

function ProductCard({ name, imageUrl, pageUrl, color }) {
  return (
    <article className={"productCard " + color ?? ""}>
      <a href={pageUrl} aria-label={`${name} details`}>
        <figure>
          <img src={imageUrl} alt={`${name} cover`} />
          <figcaption>{name}</figcaption>
        </figure>
        <div className="productCard-info">
          <div className="productCard-title">{name}</div>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </div>
      </a>
    </article>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default ProductCard;
