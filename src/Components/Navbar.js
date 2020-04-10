import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = ({title}) => {
    return (
        <nav className="navbar">
             <Link to="/" className="navbar__logo"><i className="fas fa-film"></i> {title}</Link>

             <ul className="navbar__items">
                 <li className="navbar__item"><span>Powered By</span></li>
                 <li className="navbar__item"><i className="fab fa-imdb"></i></li>
                 <li className="navbar__item"><i className="fab fa-react"></i></li>
             </ul>
        </nav>
    )
}

export default Navbar;
