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
                src="https://www.youtube.com/embed/tmo7TaOyFq0" 
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
                <p>Vijay Chowk, Khoya Mandi Gali, Golghar, Gorakhpur, UP - 273001</p>
              </div>
            </div>
            
            <div className={styles.mapWrapper}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.024843948767!2d83.3687399752174!3d26.746014976747283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145610ec16301%3A0xe7bf40049909241b!2sRadhika%20Mobile%20Training%20Institute!5e0!3m2!1sen!2sin!4v1713220000000!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Radhika Mobile Location"
              ></iframe>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MediaSection;
