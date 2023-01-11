import logo from '../assets/img/logo.png';

import { HashRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
          <img className='logo' src={logo} alt="logo" />
        </Link>
        <ul className="navbar-ul">
          <li className='nav-item'>
            <Link className='nav-link' to="/">Home</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
