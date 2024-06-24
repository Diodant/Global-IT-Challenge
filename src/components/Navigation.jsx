import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.svg';
import BurgerMenuIcon from '../img/open.svg';
import CloseMenuIcon from '../img/close.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src={LogoImg} alt="Logo" />
        </div>
        <div className="burger-menu-container" onClick={toggleMenu}>
          {!isOpen && (
            <>
              <img
                src={BurgerMenuIcon}
                alt="Menu Icon"
                className="menu-icon"
              />
              <span className="menu-text">Меню</span>
            </>
          )}
        </div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <li className="close-icon" onClick={toggleMenu}>
            <img src={CloseMenuIcon} alt="Close Menu" />
          </li>
        )}
        <li><Link to="/" onClick={toggleMenu}>Главная</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>О конкурсе</Link></li>
        <li><Link to="/articles" onClick={toggleMenu}>Новости</Link></li>
        <li><Link to="/winners" onClick={toggleMenu}>Победители</Link></li>
        <li><Link to="/jury" onClick={toggleMenu}>Жюри</Link></li>
        <li><Link to="/criteria" onClick={toggleMenu}>Критерии оценки</Link></li>
        <li><Link to="/regulations" onClick={toggleMenu}>Положение</Link></li>
        
        
      </ul>
    </nav>
  );
};

export default Navigation;
