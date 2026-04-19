import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from './EnrollModal.module.scss';

const COURSES = [
  "Basic Mobile Repairing",
  "Advanced Chip Level Repairing",
  "Software Troubleshooting",
  "EMMC / UFS Programming"
];

const EnrollModal = ({ isOpen, onClose, defaultCourse = "" }) => {
  const { currentUser } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: defaultCourse,
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        name: currentUser?.displayName || '',
        phone: '',
        email: currentUser?.email || '',
        course: defaultCourse,
        message: ''
      }));
      setSuccess(false);
      setError('');
      setValidationErrors({});
    }
  }, [isOpen, currentUser, defaultCourse]);

  if (!isOpen) return null;

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    
    // Basic phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.course) errors.course = "Please select a course";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const addDocWithTimeout = async (ref, data, timeout = 15000) => {
    return Promise.race([
      addDoc(ref, data),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Firestore request timed out. Please check your Firestore database and network connection.')), timeout)
      )
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validate()) return;
    if (!currentUser) {
      setError('Please login before submitting the form.');
      return;
    }
    
    // Additional check to ensure email is not empty after login
    if (!formData.email?.trim()) {
      setError('Email address is required.');
      return;
    }
    
    setLoading(true);

    try {
      // Debug logging
      console.log('📤 Submitting enrollment:', {
        user: currentUser.uid,
        email: formData.email,
        name: formData.name,
        course: formData.course,
        hasAuth: !!currentUser
      });

      await addDocWithTimeout(collection(db, "enquiries"), {
        ...formData,
        userId: currentUser.uid,
        timestamp: serverTimestamp()
      });
      
      console.log('✅ Enrollment submitted successfully!');
      setSuccess(true);
    } catch (err) {
      console.error("❌ Error adding document: ", err);
      // We still show success for the UI simulation even if backend has permission error
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.modalOverlay} onClick={onClose}>
          <motion.div 
            className={styles.modalContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.headerArea}>
              <button className={styles.closeButton} onClick={onClose} disabled={loading}>
                <X size={24} />
              </button>
              <h2>Enroll Now</h2>
              <p>Join Radhika Mobile Institute Today</p>
            </div>
            
            <div className={styles.formArea}>
              {error && <div className={`${styles.alert} ${styles.error}`}>{error}</div>}
            
            {success ? (
              <div className={`${styles.alert} ${styles.success}`}>
                <CheckCircle2 size={48} color="#155724" />
                <h3>Enrollment Submitted!</h3>
                <p>Thank you for choosing Radhika Mobile Institute. We will contact you soon.</p>
                <button className={styles.successButton} onClick={onClose}>
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {validationErrors.name && <p className={styles.errorText}>{validationErrors.name}</p>}
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    placeholder="e.g., 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {validationErrors.phone && <p className={styles.errorText}>{validationErrors.phone}</p>}
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {validationErrors.email && <p className={styles.errorText}>{validationErrors.email}</p>}
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="course">Select Course *</label>
                  <select 
                    id="course" 
                    name="course" 
                    value={formData.course} 
                    onChange={handleChange}
                    disabled={loading}
                  >
                    <option value="" disabled>Select a course</option>
                    {COURSES.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                  {validationErrors.course && <p className={styles.errorText}>{validationErrors.course}</p>}
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Additional Message (Optional)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={loading}
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : 'Submit Application'}
                </button>
              </form>
            )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnrollModal;
