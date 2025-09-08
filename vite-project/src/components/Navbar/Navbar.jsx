import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="navbar">

                <div className="logo">
                    <div className="circle-logo"></div>
                    <p className='fourbit-logo'>FourBit</p>
                </div>
                <div className='services'>
                    <ul className="nav-services">
                        <li>Services</li>
                        <li>Work</li>
                        <li>Process</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                    <div className="toggle-container">
                        <input type="checkbox" id='toggle-switch' className='toggle-button' />
                        <label htmlFor="check"></label>
                    </div>
                    <button className="quote">Get a Quote</button>
                </div>

            </div >
        </>
    )
}

export default Navbar
