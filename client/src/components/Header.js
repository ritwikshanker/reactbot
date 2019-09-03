import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <nav className="light-blue lighten-1">
        <div className="nav-wrapper">
            <Link to={'/'} className="brand-logo center">Medicine Chatbot</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href={"https://petpal.in/about/"}>About us</a></li>
            </ul>
        </div>
    </nav>
);

export default Header;