import "./BookCollection.css"

import ProductList from "../ProductList/ProductList"
import products from "../../helpers/products"
import { useMemo } from "react";


function BookCollection() {
    const premiumProducts = useMemo(() => {
        return products.filter((product) => product.type === 'premium');
    }, []);

    return (
        <section className="bookCollection-container">
            <div className="bookCollection-titles">
                <h5>best luxury photobooks</h5>
                <h2>Explore Wedding Premium Collection</h2>
            </div>
            <ProductList products={premiumProducts} columns={4} />
        </section>
    )
}
export default BookCollection