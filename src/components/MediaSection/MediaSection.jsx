import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Youtube, PlayCircle } from 'lucide-react';
import styles from './MediaSection.module.scss';

const MediaSection = () => {
  return (
    <section id="media-location" className={styles.mediaSection}>
      <div className="container">

        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <PlayCircle size={16} />
            <span>Media & Location</span>
          </div>
          <h2>Watch & <span>Visit Us</span></h2>
          <p>Check out our training demos on YouTube and find us easily on Google Maps.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {/* YouTube Video Section */}
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.icon}>
                <Youtube size={24} color="#ff0000" />
              </div>
              <div>
                <h3>Watch Our Training Demo</h3>
                <p>Subscribe to Radhika Mobile Gorakhpur for expert mobile repairing tutorials.</p>
              </div>
            </div>
            
            <div className={styles.videoWrapper}>
              <iframe 
                src="https://www.youtube.com/embed/0XFa4-av_J8" 
                title="Radhika Mobile Tutorials" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Google Map Section */}
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.icon}>
                <MapPin size={24} color="#0A2342" />
              </div>
              <div>
                <h3>Our Location</h3>
                <p>Vijay Chowk, Golghar, Gorakhpur, Uttar Pradesh 273001, India</p>
              </div>
            </div>
            
            <div className={styles.mapWrapper}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.633684129133!2d83.3676349133!3d26.7560634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145ddcc416d81%3A0xa63b5f9c11d873e4!2sRadhika%20Mobile%20Gorakhpur!5e0!3m2!1sen!2sin!4v1776667947574!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Radhika Mobile Location"
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/wHAcUvGHrnPrUbc2A" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.mapMarker}
              >
                <MapPin size={32} />
                <span className={styles.pulse}></span>
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MediaSection;
