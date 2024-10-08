// sidenav.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
    return (
        <aside>
            <nav>
                <ul>
                <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/home">Home</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidenav;
