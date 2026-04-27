import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Building2 } from 'lucide-react';
import styles from './About.module.scss';
import aboutImg1 from '../../assets/about1.png';
import aboutImg2 from '../../assets/about2.png';
import aboutImg3 from '../../assets/about3.png';
import aboutImg4 from '../../assets/about4.png';

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
            className={styles.imageGridWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.imageGrid}>
              <img src={aboutImg1} alt="Training Lab 1" className={styles.img1} />
              <img src={aboutImg2} alt="Training Lab 2" className={styles.img2} />
              <img src={aboutImg3} alt="Training Lab 3" className={styles.img3} />
              <img src={aboutImg4} alt="Training Lab 4" className={styles.img4} />
            </div>
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
