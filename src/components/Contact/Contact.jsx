import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Headphones } from 'lucide-react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">

        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <Headphones size={16} />
            <span>Contact Us</span>
          </div>
          <h2>Get In <span>Touch</span></h2>
          <p>Have questions about our training programs? Feel free to contact us or visit our institute.</p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.contactItems}>
              <div className={styles.item}>
                <div className={styles.icon}><Phone size={20} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 94151-58402</p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}><Mail size={20} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>deepakgkiran@gmail.com</p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}><MessageCircle size={20} /></div>
                <div>
                  <h4>WhatsApp Group</h4>
                  <p><a href="https://chat.whatsapp.com/GE6EnByjuon1iaapPO51L7?mode=ems_copy_t" target="_blank" rel="noreferrer">Join our WhatsApp</a></p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}><MapPin size={20} /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Vijay Chowk, In Front of Hotel San Plaza, Khoya Mandi Gali, Golghar, Gorakhpur, UP - 273001</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className={styles.inputGroup}>
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
