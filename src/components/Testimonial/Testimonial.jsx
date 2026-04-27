import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, GraduationCap } from 'lucide-react';
import styles from './Testimonial.module.scss';
import student1 from '../../assets/Student1.png';
import student2 from '../../assets/Student2.png';
import student3 from '../../assets/Student3.png';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Deen Dayal",
      course: "Advance IC Level Training",
      image: student1,
      text: "The practical training here is amazing. I learned deep motherboard tracing and IC reballing within just a few weeks. Now I run my own fully functional repair shop with confidence.",
      rating: 5
    },
    {
      name: "Rustam",
      course: "Complete Hardware & Software",
      image: student2,
      text: "Best mobile training institute in Gorakhpur! Sir's teaching method is very easy to understand, especially the dead mobile boot sequence logic and software flashing.",
      rating: 5
    },
    {
      name: "Krishna Mahato",
      course: "Smartphone Diagnostics",
      image: student3,
      text: "I joined with zero knowledge, but after the live practical classes, I can fix network issues, display problems, and short circuits easily. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonialSection}>
      <div className={styles.bgPattern}></div>
      <div className="container">

        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <GraduationCap size={16} />
            <span>Student Reviews</span>
          </div>
          <h2>Our Students <span>Speak!</span></h2>
          <p>Take a look at what our students say about our training, support, and practical learning experience.</p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={styles.quoteIcon}>
                <Quote size={40} />
              </div>

              <div className={styles.content}>
                <div className={styles.stars}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} />
                  ))}
                </div>
                <p>"{review.text}"</p>
              </div>

              <div className={styles.author}>
                <div className={styles.avatarWrapper}>
                  <img src={review.image} alt={review.name} className={styles.avatar} />
                  <div className={styles.avatarRing}></div>
                </div>
                <div className={styles.details}>
                  <h4>{review.name}</h4>
                  <span>{review.course}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
