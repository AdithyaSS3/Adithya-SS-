import React from 'react'
import './Footer.css'
import logo from '../../assets/logo_ss.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>Dynamic and skilled Java Full Stack Developer proficient in Java, Spring Boot, React.js, JavaScript, HTML, CSS, and SQL. Passionate about crafting robust and scalable applications, with a keen eye for user experience and interface design. Eager to leverage technical expertise to contribute to innovative projects and drive business success.</p>
            </div>
            {/* <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your mail' />
                </div>
                <div><a className="footer-subscribe" href="http://www.linkedin.com/in/adithyass2610">Subscribe</a></div>
            </div> */}
        </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">© 2024 Adithya SS
        </div>
      </div>
    </div>
  )
}

export default Footer
