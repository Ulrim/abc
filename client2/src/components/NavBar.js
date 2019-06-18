import React from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <Link to="/meet">
                    <li>
                        Meet
                    </li>
                </Link>
                <Link to="/friend">
                    <li>
                        Friend
                    </li>
                </Link>
                <Link to="/MyRoom">
                    <li>
                        My Room
                    </li>
                </Link>
                <Link to="/OpenRoom">
                    <li>
                        Open Room
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default NavBar;