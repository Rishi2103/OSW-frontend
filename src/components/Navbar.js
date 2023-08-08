import React, {useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from '../img/logo1.png';
import './Navbar.css'
export default function Navbar() {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="nav">
      <Link to="/" id="site-title">
      <img src={logo} alt="Logo" style={{ height:'45px' ,width: '120px', margin: '0px' }} />
      </Link>

      <div className={`nav-elements  ${showNavbar && 'active'}`}>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/events">Events</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/partners">Partners</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/resourceLibrary">Resource Library</CustomLink>
      </ul>
      </div>
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