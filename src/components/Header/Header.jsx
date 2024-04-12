import './Header.css';

import logo from "../../assets/icons/logo.svg"
import dendalion from "../../assets/icons/logo-dendalion.svg"
import cart from "../../assets/icons/cart.svg"

function Header() {
    return (
        <div className="header container">
            <div className="logo">
                <img className="logo-text" src={logo} alt="logo" />
                <img className="logo-dendalion" src={dendalion} alt="dendalion" />
            </div>
            <nav className="navbar">
                <a href="#">About us</a>
                <a href="#">Photo Books</a>
                <a href="#">Prints & Frames</a>
                <a href="#">Wall art</a>
                <a href="#">Gifts</a>
                <a href="#">Orders</a>
            </nav>
            <div><img src={cart} alt="cart" /></div>
        </div>
    )
}
export default Header