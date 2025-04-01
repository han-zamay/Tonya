import React, { useState } from 'react';
import { Pushka } from './components/Pushka';
import './Tonya.css';
import { motion } from 'framer-motion';
import { LionModal } from './components/Lion';
import { Cat } from './components/Cat';
export function Tonya() {
    const [lionWindow, setLionWindow] = useState(false);
    return (
        <div className='main'>
            <div className='text1'>
                С днем рождения
            </div>
            <div className='text2'>
                родная!!!
            </div>

            <Cat initialX={75} initialY={-75} className='Sonya' src='/Sonya.png' size={20}/>
            <Cat initialX={-75} initialY={-75} className='Freya' src='/Freya.png' size={15}/>

            <Pushka rotation={0} initialX={125} initialY={-125} className='pushka1' src='/ScoroStrel228.png'/>
            <motion.img
                className='potato'
                src='/PotatoMine.png'
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
            <Pushka rotation={0} initialX={-300} initialY={-125} className='pushka2' src='/ScoroStrel822.png'/>
        </div>
    )
}