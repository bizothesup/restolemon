import React from 'react'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <section id='footer'>
    <div className="footer-info">
        <img src={logo} alt='Logo' />
        <div className='doormat-navigation'>
            <h4>Doormat Navigation</h4>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/booking'>Reservations</Link></li>
                <li><Link to='/order-online'>Order Online</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
        <div>
            <h4>Contact</h4>
            <p>3 rue Odette Planchet</p>
            <p>+33 85 89 32 10 25</p>
            <p>littlelemon@restaurant.com</p>
        </div>
        <div>
            <h4>Social Media Links</h4>
            <ul>
                <li><a href='https://www.instagram.com'>Instagram</a></li>
                <li><a href='https://www.twitter.com'>Twitter</a></li>
                <li><a href='https://www.facebook.com'>Facebook</a></li>
            </ul>
        </div>
    </div>
    <div className="copyright">
        Copyright ©️ 2023 Tewende
    </div>
</section>
)
}
