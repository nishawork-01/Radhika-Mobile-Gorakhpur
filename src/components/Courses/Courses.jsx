import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Clock, Star } from 'lucide-react';
import styles from './Courses.module.scss';
import basicImg from '../../assets/course-basic.png';
import advancedImg from '../../assets/course-advanced.png';
import softwareImg from '../../assets/course-software.png';

const Courses = ({ onEnrollClick }) => {
  const courses = [
    {
      title: "Basic Mobile Repairing",
      description: "Learn fundamental troubleshooting, hardware replacement, and basic circuit understanding.",
      image: basicImg,
      duration: "45 Days",
      level: "Beginner",
      popular: false
    },
    {
      title: "Advanced Chip Level Repair",
      description: "Master micro-soldering, IC reballing, and complex motherboard diagnostics using advanced tools.",
      image: advancedImg,
      duration: "90 Days",
      level: "Advanced",
      popular: true
    },
    {
      title: "Smartphone Software Training",
      description: "Flashing, unlocking, dead boot repair, and FRP bypass for all major Android & iOS devices.",
      image: softwareImg,
      duration: "30 Days",
      level: "Intermediate",
      popular: false
    }
  ];

  return (
    <section id="courses" className={styles.courses}>
      <div className="container">

        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <BookOpen size={16} />
            <span>Training Programs</span>
          </div>
          <h2>Our Professional <span>Courses</span></h2>
          <p>Choose the right program to kickstart your career in the mobile service industry.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              className={`${styles.card} ${course.popular ? styles.popularCard : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {course.popular && (
                <div className={styles.popularBadge}>
                  <Star size={12} /> Most Popular
                </div>
              )}
              <div className={styles.imageBox}>
                <img src={course.image} alt={course.title} />
                <div className={styles.badges}>
                  <span className={styles.level}>{course.level}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button 
                  onClick={() => onEnrollClick && onEnrollClick(course.title)} 
                  className={styles.link}
                >
                  Enroll Now <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
