import React from 'react';
import { motion } from 'framer-motion';

const Heart = ({ initialX, initialY }) => {
  return (
    <motion.img
      src='/heart.png'
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        x: initialX - 100 + Math.random() * 250,
        y: initialY - 100 + Math.random() * 250,
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

export const Pet = ({ initialX, initialY }) => {
  const heartArray = new Array(60).fill(0);

  return (
    <div>
      {heartArray.map((_, index) => (
        <Heart key={index} initialX={initialX} initialY={initialY}/>
      ))}
    </div>
  );
};