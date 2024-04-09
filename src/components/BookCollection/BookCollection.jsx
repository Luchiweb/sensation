import "./BookCollection.css"

import classic from "../../assets/images/classic.jpg"
import photoart from "../../assets/images/photoart.jpg"
import impress from "../../assets/images/impress.jpg"
import grandwood from "../../assets/images/grandwood.jpg"
import ProductCard from "../ProductCard/ProductCard"


function BookCollection() {
    return (
        <section className="bookCollection-container">
            <div className="bookCollection-titles">
                <h4>best luxury photobooks</h4>
                <h2>Explore Wedding Premium Collection</h2>
            </div>
            <div className="bookCollection-products">
                <ProductCard name="Classic" pageUrl="#" imageUrl={classic} />
                <ProductCard name="Photoart" pageUrl="#" imageUrl={photoart} />
                <ProductCard name="Grandwood" pageUrl="#" imageUrl={grandwood} />
                <ProductCard name="Impress" pageUrl="#" imageUrl={impress} />
            </div>
        </section>
    )
}
export default BookCollection