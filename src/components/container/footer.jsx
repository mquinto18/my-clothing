import React from 'react'
import './style/footer.css'
const footer = () => {
  return (
    <>
        <div className='footer-container'>
            <div className='footer-container-section'>
                <div className="footer-section">
                    <div className="footer-top-social">
                        <div className="footer-text">
                            <h1>STYLZE</h1>
                        </div>
                        <div className='footer-social'>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Youtube</p>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom-links'>
                    <div className='footer-links'>
                        <div className='footer-link'>
                            <h1>Popular Products</h1>
                            <p>Men</p>
                            <p>Women</p>
                            <p>Accecories</p>
                            <p>New Arrivals</p>
                        </div>
                        <div className='footer-link'>
                            <h1>Collections</h1>
                            <p>Women High Rise</p>
                            <p>Original</p>
                            <p>Loose Cargo</p>
                            <p>Made and Crafted</p>
                            <p>Eco Performance</p>
                        </div>
                        <div className='footer-link'>
                            <h1>Get Help</h1>
                            <p>Exchange and Refund</p>
                            <p>Payment Method</p>
                            <p>Contact Us</p>
                        </div>
                        <div className='footer-link'>
                            <h1>Company</h1>
                            <p>About Us</p>
                            <p>Denim Dictionary</p>
                            <p>Privacy Policy</p>
                            <p>Terms and Conditions</p>
                            <p>Feedback</p>
                        </div>
                        <div className='footer-link'>
                            <h1>Quick Links</h1>
                            <p>Red Tab Program</p>
                            <p>Sitemap</p>
                            <p>Find a Store</p>
                            <p>Track Order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default footer
