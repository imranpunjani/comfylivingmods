'use client';

import { motion } from 'framer-motion';
import { BiSolidHomeHeart } from 'react-icons/bi';

export default function AnimatedLogo() {
  return (
    <motion.div 
      className="logo"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <BiSolidHomeHeart className="logo-icon" />
      <div>
        <h1>Comfortable Living Modifications</h1>
        <p className="tagline">Professional Home Modifications for Independent Living</p>
      </div>
    </motion.div>
  );
} 