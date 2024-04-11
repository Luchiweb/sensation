import classic from "../assets/images/products/premium-classic.jpg"
import grandwood from "../assets/images/products/premium-grandwood.jpg"
import impress from "../assets/images/products/premium-impress.jpg"
import photoart from "../assets/images/products/premium-photoart.jpg"
import thankYouBook from "../assets/images/products/thank-you-book.jpg"
import wallart from "../assets/images/products/wallart.jpg"
import frameBox from "../assets/images/products/frame-box.jpg"
import you from '../assets/images/you.jpg';
import parents from '../assets/images/parents.jpg';
import friends from '../assets/images/friends.jpg';


const products = [{
    type: "premium",
    name: "classic",
    imageUrl: classic,
    pageUrl: "#",
},
{
    type: "premium",
    name: "grandwood",
    imageUrl: grandwood,
    pageUrl: "#",
},
{
    type: "premium",
    name: "impress",
    imageUrl: impress,
    pageUrl: "#",
},
{
    type: "premium",
    name: "photoart",
    imageUrl: photoart,
    pageUrl: "#",
},
{
    type: "special",
    name: "thank You Book",
    imageUrl: thankYouBook,
    pageUrl: "#",
},
{
    type: "special",
    name: "wallart",
    imageUrl: wallart,
    pageUrl: "#",
},
{
    type: "special",
    name: "frame Box",
    imageUrl: frameBox,
    pageUrl: "#",
},
{
    type: "for",
    name: "For You",
    imageUrl: you,
    pageUrl: "#",
},
{
    type: "for",
    name: "For parents",
    imageUrl: parents,
    pageUrl: "#",
},
{
    type: "for",
    name: "For friends",
    imageUrl: friends,
    pageUrl: "#",
},]

export function productTypeFilter(type) {
    return products.filter(product => product.type === type)
}

export default products