import React, {useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from '../img/logo1.png';
import './Navbar.css'
export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    console.log('clicked');
    setMenuOpen(menuOpen);
  };
  // const closeMenu = () => {
  //   setMenuOpen(false);
  // };


  return (
    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <Link to="/" id="site-title">
      <img src={logo} alt="Logo" style={{ height:'45px' ,width: '120px', margin: '0px' }} />
      </Link>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/events">Events</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/partners">Partners</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/resourceLibrary">Resource Library</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
