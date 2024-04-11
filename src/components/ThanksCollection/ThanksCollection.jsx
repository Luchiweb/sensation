import { useMemo } from 'react';
import products from '../../helpers/products';

import Button from '../Button/Button';
import ProductList from '../ProductList/ProductList';

import './ThanksCollection.css';

function ThanksCollection() {
  const [specialProducts, forProducts] = useMemo(() => {
    const filteredSpecialProducts = products.filter((product) => product.type === 'special');
    const filteredForProducts = products.filter((product) => product.type === 'for');
    return [filteredSpecialProducts, filteredForProducts];
  }, []);

  return (
    <section className="thanks-container">
      <h3>Thank you Wedding Gifts Collection</h3>
      {[specialProducts, forProducts].map((productList, index) => (
        <ProductList products={productList} key={index} columns={3} color="secondary" />
      ))}
      <Button link="#" text="Learn more" size="large" />
    </section>
  );
}
export default ThanksCollection;
