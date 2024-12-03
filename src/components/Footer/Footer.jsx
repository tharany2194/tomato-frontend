import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    var currentYear = new Date().getFullYear()
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <li>+91 998-987-8874</li>
                <li>contact@tomato.com</li>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright {currentYear} @Tomato.com - All Rights Reserved</p>
        
    
      
    </div>
  )
}

export default Footer
