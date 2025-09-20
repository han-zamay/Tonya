import React, { useEffect, useRef, useState } from 'react';
import { Pushka } from './components/Pushka';
import './Tonya.css';
import { motion } from 'framer-motion';
import { LionModal } from './components/Lion';
import { Cat } from './components/Cat';
import { getSonyaInitial } from './utils/heigthCounter';

export function Tonya() {
    const [lionWindow, setLionWindow] = useState(false);
    const [sonyaInitial, setSonyaInitial] = useState({
        initialX: 0,
        initialY: 0,
        size: 0,
    });
    const ref: any = useRef(null);

    useEffect(() => {
        if (!ref.current) return;
        const clientRect = ref.current.getBoundingClientRect();
        console.log(clientRect);
        setSonyaInitial(getSonyaInitial(clientRect.height));
    }, []);

    return (
        <div className='main' ref={ref}>
            <div className='text1'>
                С днем рождения
            </div>
            <div className='text2'>
                родная!!!
            </div>

            <Cat initialX={sonyaInitial.initialX} initialY={sonyaInitial.initialY} className='Sonya' src='/Sonya.webp' size={20} coef={sonyaInitial.size}/>
            <Cat initialX={-sonyaInitial.initialX} initialY={sonyaInitial.initialY} className='Freya' src='/Freya.webp' size={15} coef={0.75 * sonyaInitial.size}/>

            <Pushka rotation={0} initialX={6.25 * sonyaInitial.size} initialY={-6.25 * sonyaInitial.size} coef={sonyaInitial.size} className='pushka1' src='/ScoroStrel228.webp'/>
            <motion.img
                className='potato'
                src='/PotatoMine.webp'
                alt="pupupu"
                onClick={() => setLionWindow(true)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                style={{
                    width: '20vmin',
                    height: '15vmin',
                }}
            />
            {lionWindow && <LionModal onClose={() => setLionWindow(false)}/>}
            <Pushka rotation={180} initialX={0} initialY={-6.25 * sonyaInitial.size} coef={sonyaInitial.size} className='pushka2' src='/ScoroStrel822.webp'/>
        </div>
    )
}