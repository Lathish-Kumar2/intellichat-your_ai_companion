import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import "../Styles/Footer.css"

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <img src="" alt="LOGO here" />
          <div className="footer-column">
            <p>&copy; {new Date().getFullYear()} WittyAi. All rights reserved. </p>
          </div>
        </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="#" target="_blank"><i className="fab fa-facebook" style={{fontSize:"3vh",marginRight:"2vw"}}><FaFacebook /></i></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram" style={{fontSize:"3vh"}}><FaInstagram /></i></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-x" style={{fontSize:"3vh", marginLeft:"2vw"}}><FaTwitter /></i></a></li>
            </ul>
          </div>
        
  
        <div className="footer-row">
          {/* <p>&copy; {new Date().getFullYear()} WittyAi. All rights reserved. </p> */}
          {/* <a href="/privacy" className='footer-pri'>Privacy Policy</a> | <a href="/terms" className='footer-pri'>Terms of Service</a></p> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
