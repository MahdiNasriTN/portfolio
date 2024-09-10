import { useState } from "react"
import "./navbar.css"




const Navbar = () => {

    const [isMenuOpen , setIsMenuOpen] = useState(false);

    const handleOpenMenu = () =>{
        setIsMenuOpen(true);
    }

    const handleCloseMenu = () =>{
        setIsMenuOpen(false);
    }

    return (
        <div className="navbar">
            <div className="navbar-content">
                <h1>Mahdi</h1>
                <ul class="navbar-list">
                    <li>Home</li>
                    <li>Service</li>
                    <li>Blog</li>
                    <li>Pages</li>
                    <li>Contact</li>
                </ul>
                <button className="hire-button">Hire me <img class="icons" src="./images/double-right.svg" /></button>
            </div>
            <div className="bars" onClick={handleOpenMenu}>
                <img src="./images/bars.svg"/>
            </div>
            <div className={`responsive-nav ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="close-menu" onClick={handleCloseMenu}>
                    <span className="close-menu-button">X</span>
                </div>
                <ul class="res-navbar-list">
                    <li>Home</li>
                    <li className="right-flesh">Service</li>
                    <li className="right-flesh">Blog</li>
                    <li className="right-flesh">Pages</li>
                    <li>Contact</li>
                </ul>
                <div className="social-media">
                    <div className="social-m"><img src="./images/fb.svg"/></div>
                    <div className="social-m"><img src="./images/twitter.svg"/></div>
                    <div className="social-m"><img src="./images/insta.svg"/></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;