import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, ArrowRight, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo.png';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src={logo} alt="Radhika Mobile Logo" />
              <span>Radhika Mobile Gorakhpur</span>
            </div>
            <p>
              Leading technical training institute in Gorakhpur. Empowering the next 
              generation of mobile technicians with professional skills and 
              practical knowledge.
            </p>
            <div className={styles.social}>
              <a href="https://www.facebook.com/share/1Doy33EsF1/" target="_blank" rel="noreferrer"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/radhikamobilegorakhpur?igsh=bWtlc2hxeHNnMzQx" target="_blank" rel="noreferrer"><Instagram size={18} /></a>
              <a href="https://chat.whatsapp.com/GE6EnByjuon1iaapPO51L7?mode=ems_copy_t" target="_blank" rel="noreferrer"><MessageCircle size={18} /></a>
              <a href="https://youtube.com/@radhikagmobilegorakhpur?si=6d6lyUJWgBNoeBZV" target="_blank" rel="noreferrer"><Youtube size={18} /></a>
            </div>
          </div>
          
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home"><ArrowRight size={14} /> Home</a></li>
              <li><a href="#about"><ArrowRight size={14} /> About Us</a></li>
              <li><a href="#services"><ArrowRight size={14} /> Our Services</a></li>
              <li><a href="#courses"><ArrowRight size={14} /> Our Courses</a></li>
              <li><a href="#gallery"><ArrowRight size={14} /> Gallery</a></li>
              <li><a href="#contact"><ArrowRight size={14} /> Contact Us</a></li>
            </ul>
          </div>
          
          <div className={styles.links}>
            <h4>Our Courses</h4>
            <ul>
              <li><a href="#"><ArrowRight size={14} /> Basic Repairing</a></li>
              <li><a href="#"><ArrowRight size={14} /> Chip Level Repair</a></li>
              <li><a href="#"><ArrowRight size={14} /> Software Flashing</a></li>
              <li><a href="#"><ArrowRight size={14} /> Hardware Diagnostics</a></li>
            </ul>
          </div>
          
          <div className={styles.newsletter}>
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for latest updates and course news.</p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Radhika Mobile Training Institute Gorakhpur. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
