import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Building2 } from 'lucide-react';
import styles from './About.module.scss';
import aboutImg from '../../assets/about.png';

const About = () => {
  const features = [
    "Certified Professional Trainers",
    "Modern Chip-Level Repair Lab",
    "Hands-on Practical Training",
    "100% Job & Business Support"
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={aboutImg} alt="About Radhika Mobile Institute" />
            <div className={styles.experienceBadge}>
              <span>18+</span>
              <p>Years of Expertise</p>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badgeTag}>
              <Building2 size={16} />
              <span>Who We Are</span>
            </div>
            <h2>Leading Mobile Repairing Institute in <span className={styles.highlight}>Gorakhpur</span></h2>
            <p>
              Radhika Mobile Institute is a premier technical training center dedicated to 
              empowering individuals with the skills needed to excel in the mobile 
              telecommunications industry. We provide comprehensive training from 
              basic troubleshooting to advanced motherboard chip-level repairing.
            </p>
            
            <ul className={styles.features}>
              {features.map((feature, index) => (
                <li key={index}>
                  <CheckCircle size={20} color="#00b894" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <a href="#courses" className="btn-primary">Explore Our Courses</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
