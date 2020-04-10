import React from 'react';
import '../App.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <p>&copy; build by Purna chandra sekhar.</p>
            <p>API used 
                <a href="https://www.omdbapi.com/"
                 target="_blank"
                 className="footer__link"
                 rel="noopener noreferrer"
                 > OMDB API.</a>
            </p>
        </div>
    )
}

export default Footer;
