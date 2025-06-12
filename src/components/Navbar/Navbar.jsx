import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

//Icons and Logo
import { FiShoppingBag, FiChevronDown,FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/logos/logo.png';

const Navbar = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  //Close the menu when click out
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  //Mobile Menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  //Menu transition to solid
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) { // scroll mayor to 50px change
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-content">
        {/* LEFT LINKS */}
        <div className="nav-links desktop-only">
          <div className="nav-item-dropdown" ref={dropdownRef}>
            <button 
              className="nav-link dropdown-toggle" 
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Productos <FiChevronDown className={`chevron-icon ${isDropdownOpen ? 'open' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/products/facial" className="dropdown-item">Jabones Faciales</NavLink>
                <NavLink to="/products/body" className="dropdown-item">Jabones Corporales</NavLink>
                <NavLink to="/products/recetas" className="dropdown-item">Recetas</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/about" className="nav-link">Nosotros</NavLink>
        </div>
        
        {/* CENTRAL LOGO*/}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Mizu Store" />
          </Link>
        </div>
        
        {/* RIGHT LINKS */}
        <div className="nav-links nav-links-right desktop-only">
          <NavLink to="/contact" className="nav-link">Contacto</NavLink>
          <NavLink to="/" className="nav-link cart-icon">
            <FiShoppingBag size={24} />
          </NavLink>
        </div>

        <div className="nav-icons-right">
          <button className="hamburger-button mobile-only" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/products" className="mobile-menu-link" onClick={closeMobileMenu}>Productos</NavLink>
        <NavLink to="/about" className="mobile-menu-link" onClick={closeMobileMenu}>Nosotros</NavLink>
        <NavLink to="/contact" className="mobile-menu-link" onClick={closeMobileMenu}>Contacto</NavLink>
      </div>

    </header>
  );
};

export default Navbar;