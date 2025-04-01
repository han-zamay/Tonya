import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shot } from './Shot';
import '../Tonya.css';

export const Pushka = ({ rotation, initialX, initialY, className, src }) => {
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
                initial={{ rotate: rotation, scale: 1 }}
                animate={{ rotate: rotation, scale: 1 }}
                whileHover={{ scale: 1.2 }}
                style={{
                width: '15vmin',
                height: '21vmin',
                }}
            />
            <AnimatePresence>
                {isVisible && <Shot radians={rotation * Math.PI / 180} initialX={initialX} initialY={initialY} />}
            </AnimatePresence>
        </div>
    )
}