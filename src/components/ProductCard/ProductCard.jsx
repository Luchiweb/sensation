import './ProductCard.css';

import PropTypes from 'prop-types';
import productCard from '../../assets/icons/arrow.svg';

function ProductCard({ name, imageUrl, pageUrl }) {
  return (
    <article className="productCard">
      <a href={pageUrl} aria-label={`${name} details`}>
        <figure>
          <img src={imageUrl} alt={`${name} cover`} />
          <figcaption>{name}</figcaption>
        </figure>
        <div className="productCard-info">
          <h4 className="productCard-title">{name}</h4>
          <span>
            <img src={productCard} alt="arrow" />
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
};
export default ProductCard;
