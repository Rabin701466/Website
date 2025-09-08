import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className='contact-section'>
            <div className="contact-container">
                <div className="contact-form">
                    <h2>Tell us about your project</h2>
                    <p>We typicallyreply within one business day.</p>
                    <form >
                        <input type="text" placeholder='your name' required />
                        <input type="text" placeholder='Email' required />
                        <input type="text" placeholder='company/organization' required />
                        <textarea placeholder='What are you trying to build or grow?' rows="4" required />

                        <button type='submit'> Send Message </button>
                    </form>
                </div>
                <div className="contact-info">
                    <h2>contact details</h2>
                    <p>Prefer a direct line? Reach us anytime.</p>
                    <p>+977-98-xxx-xxx</p>
                    <p>hello@fourbit.com</p>
                    <p>linked.com/company/fourbit</p>
                    <p>facebook.com/fourbit</p>
                    <div className='offshore-box'>
                        <h3>Open for Offsharing</h3>
                        <p> We partner worldwide to deliver cost-effective,high-quality builds from Nepal</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Footer
