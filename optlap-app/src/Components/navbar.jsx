import React from 'react'
import "./componentstyles/Navbar.css"
import Navlogo from "../Images/ProjectLogo1.png"
import { FaRegUser, FaShoppingCart, FaHeadphonesAlt} from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='App-Navbar'>
        <div className='first-nav-div'>
            <img src={Navlogo} alt="website-logo" width="250" />
            <input type="text" placeholder='Search Optlap' />
            <div className='nav-links'>
                <FaRegUser />
                <p>Sign In</p>
            </div>
            <div className='nav-links'>
                <FaHeadphonesAlt />
                <p>Contact Us</p>
            </div>
            <div className='nav-links'>
                <FaShoppingCart />
                Cart
            </div>
        </div>
        <div className='second-nav-div'>
            <ul>
                <li>Apex</li>
                <li>Products</li>
                <li>Solutions</li>
                <li>Services</li>
                <li>Supports</li>
                <li>Deals</li>
                <li>Find a store</li>
                <li>About Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
