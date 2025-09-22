import React, { useState } from 'react'
import './NavBar.css'
import { links } from '../../Links/Links'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo Section - Left Side */}
        <div className="navbar__left">
          <div className="navbar__logo">
            <i className="fa-solid fa-feather-pointed fa-2xl" style={{ color: '#74C0FC' }}></i>
            <a href="#home" className="navbar__logo-text" onClick={closeMenu}>Amr-I</a>
          </div>
        </div>

        {/* Burger Menu Button */}
        <button 
          className={`navbar__burger ${isMenuOpen ? 'navbar__burger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
        </button>

        {/* Navigation Section - Right Side */}
        <div className="navbar__right">
          <ul className={`navbar__nav ${isMenuOpen ? 'navbar__nav--active' : ''}`}>
            <li className="navbar__item">
              <a href="#about" className="navbar__link" onClick={closeMenu}>About me</a>
            </li>
            <li className="navbar__item">
              <a href="#project" className="navbar__link" onClick={closeMenu}>Project</a>
            </li>
            <li className="navbar__item">
              <a href="#skills" className="navbar__link" onClick={closeMenu}>My skill</a>
            </li>
            <li className="navbar__item">
              <a href={links.phone} className="navbar__link" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="navbar__overlay" onClick={closeMenu}></div>
        )}
      </div>
    </header>
  )
}

export default NavBar
