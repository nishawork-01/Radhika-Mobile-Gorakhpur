import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';

const Header = ({ onEnrollClick, onLogout }) => {
  const { currentUser, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <a href="tel:+919415158402">
                <Phone size={14} /> +91-94151-58402
              </a>
              <a href="mailto:deepakgkiran@gmail.com">
                <Mail size={14} /> deepakgkiran@gmail.com
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/share/1Doy33EsF1/" target="_blank" rel="noreferrer"><Facebook size={14} /></a>
              <a href="https://www.instagram.com/radhikamobilegorakhpur?igsh=bWtlc2hxeHNnMzQx" target="_blank" rel="noreferrer"><Instagram size={14} /></a>
              <a href="https://youtube.com/@radhikagmobilegorakhpur?si=6d6lyUJWgBNoeBZV" target="_blank" rel="noreferrer"><Youtube size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.logo}>
              {logo ? (
                <img src={logo} alt="Radhika Mobile Institute" />
              ) : (
                <div className={styles.logoPlaceholder}>RM</div>
              )}
              <span>Radhika Mobile Gorakhpur</span>
            </div>

            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
              <li><a href="#courses" onClick={() => setIsMenuOpen(false)}>Courses</a></li>
              <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
              {currentUser ? (
                <li className={styles.authLi}>
                  <span className={styles.userName}>Hi, {currentUser.displayName || 'User'}</span>
                  <button onClick={() => { logout(); if(onLogout) onLogout(); setIsMenuOpen(false); }} className={styles.logoutBtn}>Logout</button>
                  <button onClick={(e) => { e.preventDefault(); onEnrollClick(); setIsMenuOpen(false); }} className="btn-primary">Enroll Now</button>
                </li>
              ) : (
                <li className={styles.mobileCTA}>
                  <button onClick={(e) => { e.preventDefault(); onEnrollClick(); setIsMenuOpen(false); }} className="btn-primary">Enroll Now</button>
                </li>
              )}
            </ul>

            <button 
              className={styles.menuToggle} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
