import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Eye, PlayCircle } from 'lucide-react';
import styles from './Gallery.module.scss';

// Import images
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';

// Import local videos
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';

const Gallery = () => {
  const mediaItems = [
    {
      url: gallery1,
      title: "Hands-on Practical",
      category: "Training",
      type: "image"
    },
    {
      url: gallery1,
      videoUrl: video1,
      title: "Advanced Lab Training",
      category: "Workshop",
      type: "video"
    },
    {
      url: gallery2,
      title: "Advanced Tools Setup",
      category: "Lab",
      type: "image"
    },
    {
      url: gallery2,
      videoUrl: video2,
      title: "Micro-soldering Work",
      category: "Hardware",
      type: "video",
      rotated: true
    },
    {
      url: gallery3,
      title: "Success Celebration",
      category: "Academy",
      type: "image"
    },
    {
      url: gallery3,
      videoUrl: video3,
      title: "Live Training Session",
      category: "Classroom",
      type: "video",
      //rotated: true
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
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {item.type === 'video' ? (
                <video
                  src={item.videoUrl}
                  poster={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`${styles.video} ${item.rotated ? styles.rotated : ''}`}
                />
              ) : (
                <img src={item.url} alt={item.title} loading="lazy" />
              )}

              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.iconCircle}>
                    {item.type === 'video' ? <PlayCircle size={28} /> : <Eye size={22} />}
                  </div>
                  <span className={styles.category}>{item.category}</span>
                  <h4>{item.title}</h4>
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
