import React from 'react';
import { motion } from 'framer-motion';

const CertificateCard = ({ cert }) => {
  return (
    <motion.div 
      className="cert-card relative overflow-hidden group cursor-pointer break-inside-avoid rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.10)] will-change-transform"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <img 
        src={cert.image} 
        alt={cert.title} 
        className="w-full h-auto object-cover rounded-lg" 
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
};

export default CertificateCard;
