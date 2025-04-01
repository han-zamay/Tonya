import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Tonya.css';
import { Pet } from './Pet';

export const Cat = ({ initialX, initialY, className, src, size }) => {
    const [isVisible, setVisible] = useState(false);
    return (
        <div className={className} style={{ position: 'relative' }}>
            <motion.img
                src={src}
                alt="pupupu"
                onClick={() => {
                setVisible(true);
                setTimeout(() => setVisible(false), 2000);
                }}
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                style={{
                width: `${size}vmin`,
                height: `${size}vmin`,
                }}
            />
            <AnimatePresence>
                {isVisible && <Pet initialX={initialX} initialY={initialY} />}
            </AnimatePresence>
        </div>
    )
}