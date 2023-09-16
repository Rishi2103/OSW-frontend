import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../img/logo1.png";
import profile_img from "../img/profile-img.jpg";
import "./Navbar.css";
// import { Padding } from "@mui/icons-material";
// import ModalForm from "./ModalForm";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(profile_img);
  const navigate = useNavigate();
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const dropdown = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsProfileOpen(true);
  };
  const closeModal = () => {
    setIsProfileOpen(false);
  };

  const handleLogoutClick = () => {
    // Handle the "Logout" action here
    console.log(localStorage.getItem("userAuthToken"));

    localStorage.removeItem("userAuthToken");
    console.log(localStorage.getItem("userAuthToken"));
    navigate("/login", { replace: true });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Add or remove the 'menu-open' class to the body based on menuOpen state
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeNavbar = (event) => {
      // Check if the clicked element is part of the navbar
      if (!event.target.closest(".nav")) {
        setMenuOpen(false);
      }
    };

    // Add the click event listener to the document
    document.addEventListener("click", closeNavbar);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  }, []);
      const viewProfile = () =>{
      navigate('/profile');
    }

  return (
    <nav className={`nav ${menuOpen ? "open" : ""}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
      <div className="logo-img">
        <Link to="/" id="site-title">
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "45px",
              width: "120px",
              margin: "0px",
              objectFit: "fill",
            }}
          />
        </Link>
      </div>
      <div className="icons">
        <span className="icons-nav">
          <i class="fa-regular fa-comment-dots"></i>
        </span>
        <span className="icons-nav">
          <i class="fa-solid fa-bell"></i>
        </span>
        {/* <div><img className="profile-img-nav" src={profile_img} alt="" /></div> */}
        <div className="profile-div-nav" onClick={dropdown}>
          <img className="profile-img" src={profile_img} alt="" />{" "}
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            <li style={{ marginTop: "10px" }} onClick={viewProfile}>
              <i
                class="fa-solid fa-user"
                style={{ padding: "0", marginRight: "10px" }}
              ></i>
              View Profile
            </li>
            <li onClick={openModal}>
              <i
                class="fa-solid fa-square-check"
                style={{ padding: "0", marginRight: "10px" }}
              ></i>
              Profile Form
            </li>
            <li style={{ marginBottom: "10px" }} onClick={handleLogoutClick}>
              <i
                class="fa-solid fa-arrow-right-from-bracket"
                style={{ padding: "0", marginRight: "10px" }}
              ></i>
              Logout
            </li>
          </ul>
        )}
        {isProfileOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              {/* Your form content goes here */}
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "17px",
                }}
              >
                <img
                  src={selectedImage}
                  alt="Preview"
                  style={{
                    maxWidth: "20%",
                    borderRadius: "50%",
                    marginBottom: "20px",
                  }}
                />

                <div className="form-field">
                  <label>Profile Photo: </label>
                  <input type="file" onChange={handleImageChange} />
                </div>

                <div className="form-field">
                  <label>Username:</label>
                  <input type="text" required />
                </div>
                <div className="form-field">
                  <label>Email:</label>
                  <input type="text" required />
                </div>
                <div className="form-field">
                  <label>First Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-field">
                  <label>Last Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-field">
                  <label>Contact No.:</label>
                  <input type="text" required />
                </div>

                <button className="modal-submit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <img
          src={logo}
          className="logo-img2"
          alt="Logo"
          style={{
            height: "45px",
            width: "120px",
            margin: "0 10px",
            objectFit: "fill",
          }}
        />
        <hr />
        <CustomLink to="/" onClick={closeMenu}>
          <span className="nav-icons">
            <i className="fa-solid fa-house" style={{ color: "#5a5e63" }}></i>
          </span>
          Home
        </CustomLink>
        <CustomLink to="/events" onClick={closeMenu}>
          <span className="nav-icons">
            <i
              className="fa-solid fa-calendar-check"
              style={{ color: "#5a5e63" }}
            ></i>
          </span>
          Events
        </CustomLink>
        <CustomLink to="/team" onClick={closeMenu}>
          <span className="nav-icons">
            <i className="fa-solid fa-user" style={{ color: "#5a5e63" }}></i>
          </span>
          Team
        </CustomLink>
        <CustomLink to="/speakers" onClick={closeMenu}>
          <span className="nav-icons">
            <i
              className="fa-solid fa-volume-up"
              style={{ color: "#5a5e63" }}
            ></i>
          </span>
          Speakers
        </CustomLink>
        <CustomLink to="/about" onClick={closeMenu}>
          <span className="nav-icons">
            <i
              className="fa-solid fa-address-card"
              style={{ color: "#5a5e63" }}
            ></i>
          </span>
          About
        </CustomLink>
        <CustomLink to="/contact" onClick={closeMenu}>
          <span className="nav-icons">
            <i
              className="fa-solid fa-comments"
              style={{ color: "#5a5e63" }}
            ></i>
          </span>
          Contact
        </CustomLink>
        <CustomLink to="/blogs" onClick={closeMenu}>
          <span className="nav-icons">
            <i className="fa-solid fa-blog" style={{ color: "#5a5e63" }}></i>
          </span>
          Blogs
        </CustomLink>
        <CustomLink to="/resourceLibrary" onClick={closeMenu}>
          <span className="nav-icons">
            <i
              className="fa-solid fa-photo-film"
              style={{ color: "#5a5e63" }}
            ></i>
          </span>
          Resource Library
        </CustomLink>
        <span className="icons-norm">
          <i className="fa-solid fa-comment-dots"></i>
        </span>
        <span className="icons-norm">
          <i class="fa-solid fa-bell"></i>
        </span>
        <div className="profile-div" onClick={dropdown}>
          <img className="profile-img" src={profile_img} alt="" />{" "}
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            <li style={{ marginTop: "10px" }} onClick={viewProfile}>
              <i
                class="fa-solid fa-user"
                style={{ padding: "0", marginRight: "10px" }}
              ></i>
              View Profile
            </li>
            <li onClick={openModal}>
              <i
                class="fa-solid fa-square-check"
                style={{ padding: "0", marginRight: "10px" }}
              ></i>
              Profile Form
            </li>
            <li style={{ marginBottom: "10px" }} onClick={handleLogoutClick}>
              <i
                class="fa-solid fa-arrow-right-from-bracket"
                style={{ padding: "0", marginRight: "10px" }}
              ></i>
              Logout
            </li>
          </ul>
        )}
        {isProfileOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              {/* Your form content goes here */}
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "17px",
                }}
              >
                <img
                  src={selectedImage}
                  alt="Preview"
                  style={{
                    maxWidth: "20%",
                    borderRadius: "50%",
                    marginBottom: "20px",
                  }}
                />

                <div className="form-field">
                  <label>Profile Photo: </label>
                  <input type="file" onChange={handleImageChange} />
                </div>

                <div className="form-field">
                  <label>Username:</label>
                  <input type="text" required />
                </div>
                <div className="form-field">
                  <label>Email:</label>
                  <input type="text" required />
                </div>
                <div className="form-field">
                  <label>First Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-field">
                  <label>Last Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-field">
                  <label>Contact No.:</label>
                  <input type="text" required />
                </div>

                <button className="modal-submit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
