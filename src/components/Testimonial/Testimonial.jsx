import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, GraduationCap } from 'lucide-react';
import styles from './Testimonial.module.scss';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "Advance IC Level Training",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
      text: "The practical training here is amazing. I learned deep motherboard tracing and IC reballing within just a few weeks. Now I run my own fully functional repair shop with confidence.",
      rating: 5
    },
    {
      name: "Vikas Singh",
      course: "Complete Hardware & Software",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
      text: "Best mobile training institute in Gorakhpur! Sir's teaching method is very easy to understand, especially the dead mobile boot sequence logic and software flashing.",
      rating: 5
    },
    {
      name: "Amit Yadav",
      course: "Smartphone Diagnostics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
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
