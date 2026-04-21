import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Facebook, Instagram, Youtube, Home, User, Settings, GraduationCap, Image, MessageSquare } from 'lucide-react';
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
              <a href="mailto:radhikamobilegorakhpur@gmail.com">
                <Mail size={14} /> radhikamobilegorakhpur@gmail.com
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

            <ul className={styles.navLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
              {currentUser ? (
                <li className={styles.authLi}>
                  <span className={styles.userName}>Hi, {currentUser.displayName || 'User'}</span>
                  <button onClick={() => { logout(); if(onLogout) onLogout(); }} className={styles.logoutBtn}>Logout</button>
                  <button onClick={(e) => { e.preventDefault(); onEnrollClick(); }} className="btn-primary">Enroll Now</button>
                </li>
              ) : null}
            </ul>

            {/* Mobile Sidebar */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
              <div className={styles.mobileMenuHeader}>
                <div className={styles.logo}>
                  {logo ? <img src={logo} alt="Logo" /> : <span>RM</span>}
                  <span>Radhika Mobile</span>
                </div>
                <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>
                  <X size={28} strokeWidth={2.5} />
                </button>
              </div>

              <div className={styles.mobileNavLinks}>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>
                  <Home size={18} className={styles.navIcon} />
                  <span>Home</span>
                </a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  <User size={18} className={styles.navIcon} />
                  <span>About</span>
                </a>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>
                  <Settings size={18} className={styles.navIcon} />
                  <span>Services</span>
                </a>
                <a href="#courses" onClick={() => setIsMenuOpen(false)}>
                  <GraduationCap size={18} className={styles.navIcon} />
                  <span>Courses</span>
                </a>
                <a href="#gallery" onClick={() => setIsMenuOpen(false)}>
                  <Image size={18} className={styles.navIcon} />
                  <span>Gallery</span>
                </a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <MessageSquare size={18} className={styles.navIcon} />
                  <span>Contact</span>
                </a>

                <div className={styles.mobileActions}>
                  {currentUser ? (
                    <div className={styles.userDetails}>
                      <div className={styles.userInfo}>
                        <div className={styles.userAvatar}>{currentUser.displayName ? currentUser.displayName[0] : 'U'}</div>
                        <span className={styles.userName}>{currentUser.displayName || 'User'}</span>
                      </div>
                      <button onClick={() => { logout(); if(onLogout) onLogout(); setIsMenuOpen(false); }} className={styles.logoutBtn}>Logout</button>
                      <button onClick={(e) => { e.preventDefault(); onEnrollClick(); setIsMenuOpen(false); }} className="btn-primary">Enroll Now</button>
                    </div>
                  ) : (
                    <button onClick={(e) => { e.preventDefault(); onEnrollClick(); setIsMenuOpen(false); }} className="btn-primary">Enroll Now</button>
                  )}
                </div>
              </div>

              <div className={styles.mobileSocials}>
                <span>Follow Us</span>
                <div className={styles.socialIcons}>
                  <a href="https://www.facebook.com/share/1Doy33EsF1/" target="_blank" rel="noreferrer">
                    <Facebook className={styles.socialIcon} size={24} color="#FFD700" />
                  </a>
                  <a href="https://www.instagram.com/radhikamobilegorakhpur?igsh=bWtlc2hxeHNnMzQx" target="_blank" rel="noreferrer">
                    <Instagram className={styles.socialIcon} size={24} color="#FFD700" />
                  </a>
                  <a href="https://youtube.com/@radhikagmobilegorakhpur?si=6d6lyUJWgBNoeBZV" target="_blank" rel="noreferrer">
                    <Youtube className={styles.socialIcon} size={24} color="#FFD700" />
                  </a>
                </div>
              </div>
            </div>

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
