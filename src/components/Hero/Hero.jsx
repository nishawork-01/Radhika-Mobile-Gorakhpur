import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Smartphone, Users, GraduationCap, Star } from 'lucide-react';
import styles from './Hero.module.scss';
import heroBg from '../../assets/hero-bg.png';

const AnimatedCounter = ({ target, suffix = '+', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = target / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [hasStarted, target, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero = ({ onEnrollClick }) => {
  const stats = [
    { icon: <Users size={18} />, value: 5000, suffix: '+', label: 'Trained' },
    { icon: <Award size={18} />, value: 18, suffix: '++', label: 'Exp' },
    { icon: <GraduationCap size={18} />, value: 100, suffix: '%', label: 'Placement' },
    { icon: <Star size={18} />, value: 4.9, suffix: '★', label: 'Rating' },
  ];

  return (
    <section id="home" className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className={styles.overlay}></div>
      
      {/* Decorative Blur Orbs */}
      <div className={styles.blurOrb1}></div>
      <div className={styles.blurOrb2}></div>

      <div className="container">
        <div className={styles.grid}>
          
          {/* Left Content Column */}
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className={styles.liveBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className={styles.pulseDot}></span>
              Live Training Lab Gorakhpur
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className={styles.heroTitleMain}>Build Your Career</span>
              <br />
              <span className={styles.heroTitleSub}>in Mobile Technology</span>
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Master Advanced Chip-Level Repairing with industry experts. 
              Gorakhpur's premier institute with 18+ years of technical excellence.
            </motion.p>
            
            <motion.div 
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button onClick={onEnrollClick} className={styles.btnPrimary}>
                Quick Enrollment <ArrowRight size={18} />
              </button>
              <a href="#courses" className={styles.btnSecondary}>Explore Courses</a>
            </motion.div>

            {/* Stats Pills */}
            <motion.div 
              className={styles.statsPills}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className={styles.statPill}>
                  <span className={styles.pillIcon}>{stat.icon}</span>
                  <div className={styles.pillText}>
                    <span className={styles.pillValue}>
                      {stat.value % 1 !== 0 ? stat.value : <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                    </span>
                    <span className={styles.pillLabel}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div 
            className={styles.visualColumn}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className={styles.glassCard}>
              <div className={styles.cardGlow}></div>
              <img src={heroBg} alt="Advanced Mobile Training" className={styles.heroImage} loading="eager" />
              
              {/* Floating Tech Elements */}
              <motion.div 
                className={styles.floatingBadge1}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Smartphone size={24} color="#ffcc00" />
                <span>Chip Level</span>
              </motion.div>

              <motion.div 
                className={styles.floatingBadge2}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Award size={24} color="#ffcc00" />
                <span>ISO Certified</span>
              </motion.div>

              <div className={styles.experienceYear}>
                <strong>18+</strong>
                <span>Years</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.scrollDown}>
        <span>SCROLL TO EXPLORE</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
};

export default Hero;
