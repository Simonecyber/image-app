import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

//import FontAwesome
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    
                        <NavLink className="nav-logo" to='/'>ImageApp
                        
                        <FontAwesomeIcon className="faCamera" icon={faCamera} />
                        
                        </NavLink>
                    


<ul className={click ? "nav-menu active" : "nav-menu"}>
    <li className="nav-item">
        <NavLink 
        exact to='/' 
        activeClassName="active"
        className="nav-links" 
        onClick={handleClick} >
            Cerca
            </NavLink>
    </li>

    <li className="nav-item">
        <NavLink 
         to='/favourites'
         activeClassName="active"
        className="nav-links" 
        onClick={handleClick} >
             Favourites</NavLink>
    </li>

    <li className="nav-item">
        <NavLink 
        to='/about'
        activeClassName="active"
        className="nav-links" 
        onClick={handleClick} >
            About
            </NavLink>
    </li>
</ul>

<div className="nav-icon">
    
    <FontAwesomeIcon  onClick={handleClick} icon={click ? faTimes : faBars} />

</div>


                </div>
            </nav>
        </>
    );
};

export default Header;
