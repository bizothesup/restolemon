import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import '../App.css'
import Navigation from './Navigation'
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
      <nav className="navigation">
        <Link to='/'><img  src={logo} alt='logo'/></Link>
        <button className="hamburger"
         onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        {/* <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/booking'>Reservations</Link></li>
            <li><Link to='/order-online'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul> */}
        <Navigation />
        </div>
      </nav>
  )
}
