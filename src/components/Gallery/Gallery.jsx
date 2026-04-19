import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Eye } from 'lucide-react';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const images = [
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/1.png",
      title: "Advanced PCB Tracing",
      category: "Hardware"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/2.png",
      title: "Microscope Repairing",
      category: "Lab Work"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/3.png",
      title: "IC Level Hardware Repair",
      category: "Training"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/6.png",
      title: "Digital Logic Board Testing",
      category: "Diagnostics"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/5.png",
      title: "Software Flashing & Unlock",
      category: "Software"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/4.png",
      title: "Complete Screen Replacement",
      category: "Hardware"
    }
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <Camera size={16} />
            <span>Workshop Gallery</span>
          </div>
          <h2>See Our <span>Work!</span></h2>
          <p>Here's a quick look at the training transformations and workshop results we deliver every day.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className={styles.item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img src={img.url} alt={img.title} loading="lazy" />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.iconCircle}>
                    <Eye size={22} />
                  </div>
                  <span className={styles.category}>{img.category}</span>
                  <h4>{img.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
