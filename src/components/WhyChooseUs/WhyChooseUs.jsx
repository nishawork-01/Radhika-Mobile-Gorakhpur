import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Microscope, Headset, Wallet } from 'lucide-react';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Experienced Trainers",
      description: "Learn from industry experts with over 10 years of field experience in mobile repairing."
    },
    {
      icon: <Microscope size={32} />,
      title: "Practical Training",
      description: "Get hands-on experience on live boards and use advanced diagnostic tools in our labs."
    },
    {
      icon: <Headset size={32} />,
      title: "100% Support",
      description: "Post-training support to help you start your own business or secure a job in top service centers."
    },
    {
      icon: <Wallet size={32} />,
      title: "Affordable Fees",
      description: "Quality education at the most competitive price in Gorakhpur with flexible payment options."
    }
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className="container">

        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <Trophy size={16} />
            <span>Our Strengths</span>
          </div>
          <h2>Why Choose <span>Radhika Mobile?</span></h2>
          <p>We don't just teach repairing; we build professional technicians ready for the industry.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.iconBox}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
