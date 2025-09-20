import React from 'react';
import { motion } from 'framer-motion';

const Heart = ({ initialX, initialY, coef }) => {
  return (
    <motion.img
      src='/heart.webp'
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        x: initialX - coef * 6 + Math.random() * coef * 13,
        y: initialY - coef * 6 + Math.random() * coef * 13,
        scale: Math.random() + 0.2,
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        width: `${Math.random() * 20 + 5}px`,
        height: `${Math.random() * 20 + 5}px`,
        position: 'absolute',
      }}
    />
  );
};

export const Pet = ({ initialX, initialY, coef }) => {
  const heartArray = new Array(60).fill(0);

  return (
    <div>
      {heartArray.map((_, index) => (
        <Heart key={index} initialX={initialX} initialY={initialY} coef={coef}/>
      ))}
    </div>
  );
};