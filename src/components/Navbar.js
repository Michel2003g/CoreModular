import logo from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/CoreModular">
          <img className='logo' src={logo} alt="logo" />
        </a>
        <ul className="navbar-ul">
          <li className='nav-item'>
            <a className='nav-link' href="/CoreModular">Home</a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
