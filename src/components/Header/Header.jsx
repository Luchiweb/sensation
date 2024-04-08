import './Header.css';

import logo from "../../assets/images/logo.svg"

function Header() {
    return (
        <div className="header container">
            <img src={logo} alt="logo" />
            <nav className="navbar">
                <a href="#">About us</a>
                <a href="#">Photo Books</a>
                <a href="#">Prints & Frames</a>
                <a href="#">Wall art</a>
                <a href="#">Gifts</a>
                <a href="#">Orders</a>
            </nav>
            <div></div>
        </div>
    )
}
export default Header