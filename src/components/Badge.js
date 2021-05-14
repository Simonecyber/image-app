import React from 'react';

import {faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Badge = () => {
    return (
        <div className="container_badge" >
            <h3>Developed By Simone Franceschetti</h3>
           
            <ul>
                <li><FontAwesomeIcon icon={faLinkedin} className="icon" /><a className="icon_a" href="https://www.linkedin.com/in/simone-franceschetti">Linkedin</a> </li>
                
                <li><FontAwesomeIcon icon={faGithub} className="icon" /><a className="icon_a" href="https://github.com/Simonecyber">GitHub</a> </li>
                
            </ul>

        </div>
    )
}

export default Badge;
