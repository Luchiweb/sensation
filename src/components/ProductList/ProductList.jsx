import PropTypes from 'prop-types';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';

function ProductList({ products, columns, color }) {
  return (
    <section className="productList">
      <div className={'productList-products' + ' col-' + columns}>
        {products.map((product) => (
          <ProductCard
            name={product.name}
            imageUrl={product.imageUrl}
            pageUrl={product.pageUrl}
            key={product.name}
            color={color}
          />
        ))}
      </div>
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      pageUrl: PropTypes.string.isRequired,
    }),
  ),
  columns: PropTypes.number.isRequired,
  color: PropTypes.string,
};
export default ProductList;
