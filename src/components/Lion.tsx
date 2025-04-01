import React from 'react';
import Modal from 'react-modal';
import '../Tonya.css';

export const LionModal = ({ onClose }) => {
    return (
        <Modal 
            isOpen={true} 
            onRequestClose={onClose} 
            className='lion'
        >
            <video controls autoPlay loop width="100%">
                <source src="/Lion.mp4" type="video/mp4"/>
                pupupupu
            </video>
            <button onClick={onClose} className='closeButton'>Close</button>
        </Modal>
    );
};