import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Monitor, Cpu, Award, Home, Video, MessageCircle, Clock, ShieldCheck, Moon } from 'lucide-react';
import styles from './Services.module.scss';

const Services = () => {
  const services = [
    {
      icon: <Monitor size={32} />,
      title: "Digital Class",
      description: "Smart teaching with digital projectors and clear technical visual learning."
    },
    {
      icon: <Clock size={32} />,
      title: "Limited Seats",
      description: "Small batch sizes for better attention and faster learning outcomes."
    },
    {
      icon: <Cpu size={32} />,
      title: "Live Practical Training",
      description: "Hands-on experience on live boards and real customer devices every day."
    },
    {
      icon: <Home size={32} />,
      title: "Hostel Facility",
      description: "Safe and affordable accommodation for outstation students."
    },
    {
      icon: <Video size={32} />,
      title: "Zoom Support",
      description: "Online doubt-clearing sessions and support after class hours."
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Updated Tools",
      description: "Training with the latest repairing tools used in real repair shops."
    },
    {
      icon: <Moon size={32} />,
      title: "Night Extra Class",
      description: "Extra evening sessions for students with busy schedules."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Certificate",
      description: "Get a professional certificate after successful training completion."
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className="container">

        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <Settings size={16} />
            <span>What We Offer</span>
          </div>
          <h2>Our Specialized <span>Services</span></h2>
          <p>We provide a complete ecosystem for technical education and professional growth.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={styles.iconBox}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
