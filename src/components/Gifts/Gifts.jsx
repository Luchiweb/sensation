import { useMemo } from 'react';
import products from '../../helpers/products';
import ProductList from '../ProductList/ProductList';
import Button from '../Button/Button';

import './Gifts.css';
function Gifts() {

    const specialProducts = useMemo(() => {
        const filteredSpecialProducts = products.filter((product) => product.type === 'special');
        return filteredSpecialProducts;
    }, []);
    return (
        <section className="gifts-container">
            <div className="gifts-titles">
                <h5>give love</h5>
                <h2>Gifts for you and the ones you love</h2>
            </div>
            <div className="gifts-products">
                {[specialProducts].map((productList, index) => (
                    <ProductList products={productList} key={index} columns={3} color="main" />
                ))}
                <Button link="#" text="Learn more" size="large" />
            </div>
        </section>
    );
}
export default Gifts;
