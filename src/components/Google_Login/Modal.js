import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';
import '../Template.css';
import '../Introduction/Introduktion.css';


const Modal = () => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                <div className="header">Login </div>
                <div className="content">For at forsætte skal du logge ind</div>
                <div className="actions">
                    <Link to="/PageOne">
                        <GoogleAuth />
                    </Link>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
