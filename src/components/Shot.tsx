import React from 'react';
import { motion } from 'framer-motion';

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * (100 - 65) + 65);
  const lightness = Math.floor(Math.random() * (100 - 50) + 50);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const Confetti = ({initialX, initialY, radians, coef }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        x: initialX + Math.random() * 15 * coef * Math.cos(radians) + Math.random() * 20 - 10,
        y: initialY + Math.random() * 15 * coef * Math.sin(radians) + Math.random() * 20 - 10,
        scale: 1,
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        width: `${0.25 * coef}px`,
        height: `${0.25 * coef}px`,
        backgroundColor: getRandomColor(),
        borderRadius: `${Math.random() * 30 + 20}%`,
        position: 'absolute',
      }}
    ></motion.div>
  );
};

export const Shot = ({initialX, initialY, radians, coef }) => {
  const confettiArray = new Array(100).fill(0);

  return (
    <div>
      {confettiArray.map((_, index) => (
        <Confetti key={index} radians={radians} initialX={initialX} initialY={initialY} coef={coef}/>
      ))}
    </div>
  );
};