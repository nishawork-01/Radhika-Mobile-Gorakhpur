import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import styles from './Map.module.scss';

const Map = () => {
  return (
    <section id="location" className={styles.mapSection}>
      <div className="container">
        <div className="section-title">
          <h2>Visit Our Institute</h2>
          <p>We are located in the heart of Gorakhpur, easily accessible from all parts of the city.</p>
        </div>
        
        <div className={styles.grid}>
          <motion.div 
            className={styles.mapInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.infoCard}>
              <h3>Contact Details</h3>
              <div className={styles.item}>
                <MapPin size={24} className={styles.icon} />
                <div>
                  <h4>Our Address</h4>
                  <p>Vijay Chowk, In Front of Hotel San Plaza, Khoya Mandi Gali, Golghar, Gorakhpur, UP - 273001</p>
                </div>
              </div>
              
              <div className={styles.item}>
                <Phone size={24} className={styles.icon} />
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 94151-58402</p>
                </div>
              </div>
              
              <div className={styles.item}>
                <Clock size={24} className={styles.icon} />
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon - Sat: 11:00 AM - 09:00 PM</p>
                  <p>Sunday: Weekly Off</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.mapWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.024843948767!2d83.3687399752174!3d26.746014976747283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145610ec16301%3A0xe7bf40049909241b!2sRadhika%20Mobile%20Training%20Institute!5e0!3m2!1sen!2sin!4v1713220000000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Radhika Mobile Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
