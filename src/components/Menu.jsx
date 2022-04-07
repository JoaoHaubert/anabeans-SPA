import "./Menu.css" 
import React from 'react';
import { Link } from 'react-router-dom'
const Menu = props => (
    <aside className = "Menu">
        <nav>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/Menu">Menu</Link>
                </li>
                <li>
                    <Link to = "/Gallery">Gallery</Link>
                </li>
                <li>
                    <Link to = "/OrderNow">Order Now</Link>
                </li>
                
            </ul>
        </nav>
    </aside>
)

export default Menu;