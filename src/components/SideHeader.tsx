import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for active link handling
import comlogo from "../assets/images/companylogo.png";
import "./SideHeader.css";

const SideHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Use React Router's useLocation to get the current path
  const location = useLocation();

  // Toggle the menu on click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Check if the current path matches the link
  const isActive = (path: string) => {
    return location.pathname === path ? "active-link" : "";
  };

  // TODO : use this array and map to create the menu on navbar
  // const menuList = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
  // <ul>
  //             {menuList.map((menu) => (
  //               <li key={menu}>
  //                 <Link
  //                   to={`/${menu.toLowerCase()}`}
  //                   className={isActive(`/${menu.toLowerCase()}`)}
  //                   onClick={closeMenu}
  //                 >
  //                   {menu}
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>

  return (
    <>
      {/* Fixed header for mobile and desktop */}
      <header className="header">
        <div className="header-container">
          {/* Logo and company name with homepage link */}
          <h1 className="logo">
            <a href="./pages/Home" className="logo-link">
              <img src={comlogo} alt="AspenCask Logo" className="logo-img" />
              <span className="company-name">AspenCask</span>
            </a>
          </h1>

          {/* Navigation Links */}

          {/*  

          // TODO: use Nalink instead of Link
          <NavLink to="/about" activeClassName="my-active-class">
          About
        </NavLink> */}
          <nav className={`nav-links ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/" onClick={closeMenu} className={isActive("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className={isActive("/about")}
                >
                  About-Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={closeMenu}
                  className={isActive("/services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={closeMenu}
                  className={isActive("/portfolio")}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className={isActive("/contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Hamburger Menu */}
          <div className="menu-toggle" onClick={toggleMenu}>
            {/* {[1, 2, 3].map((i) => (
              <React.Fragment key={i}> */}
            {/* 
              TODO: do it using map

             */}
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            {/* </React.Fragment> */}
            {/* ))} */}
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="main-content">{/* Your page content goes here */}</div>
    </>
  );
};

export default SideHeader;
