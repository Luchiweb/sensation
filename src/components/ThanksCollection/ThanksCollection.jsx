import products from '../../helpers/products';
import Button from '../Button/Button';
// import you from '../../assets/images/you.jpg';
// import parents from '../../assets/images/parents.jpg';
// import friends from '../../assets/images/friends.jpg';

import ProductList from '../ProductList/ProductList';

import './ThanksCollection.css';

function ThanksCollection() {
  const specialProducts = products.filter((product) => product.type === 'special');
  const forProducts = products.filter((product) => product.type === 'for');

  return (
    <section className="thanks-container">
      <h3>Thank you Wedding Gifts Collection</h3>
      <ProductList products={specialProducts} columns={3} color="secondary" />
      <ProductList products={forProducts} columns={3} color="secondary" />
      <Button link="#" text="Learn more" size="large" />
    </section>
  );
}
export default ThanksCollection;
