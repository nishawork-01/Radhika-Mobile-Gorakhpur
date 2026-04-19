import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Play, Users, Video } from 'lucide-react';
import styles from './YouTube.module.scss';

const YouTube = () => {
  return (
    <section className={styles.youtube}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badge}>
              <Youtube size={16} /> <span>YouTube Channel</span>
            </div>
            <h2>Learn Technical Skills Online with Our Experts</h2>
            <p>
              Subscribe to our YouTube channel **Radhika Mobile Gorakhpur** for 
              latest mobile repairing tutorials, case studies, and student 
              success stories.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <Users size={20} />
                <span>10K+ Subscribers</span>
              </div>
              <div className={styles.statItem}>
                <Video size={20} />
                <span>500+ Tutorials</span>
              </div>
            </div>
            
            <a 
              href="https://www.youtube.com/@radhikamobilegorakhpur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ytBtn}
            >
              <Play size={18} fill="currentColor" /> Subscribe Now
            </a>
          </motion.div>
          
          <motion.div 
            className={styles.videoWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.videoPlaceholder}>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/videoseries?list=UU6z5tZ0t_9y9xG7p9K5rP9A" 
                title="Radhika Mobile Tutorials" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
