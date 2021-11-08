import React from 'react'
import './NavLinks.css'
import { RiArrowDropDownLine } from 'react-icons/ri';
const NavLinks = () => {
    return (
        <div className="navLinks">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Team</li>
                <li>Pricing</li>
                <li style={{position:"relative"}}>Drop Down <RiArrowDropDownLine size={24}/> </li>
                <li>Contact</li>
                <li>Get Started</li>
            </ul>     
        </div>
    )
}

export default NavLinks
