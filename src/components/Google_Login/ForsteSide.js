import React from 'react';
import '../Template.css'
import { Link } from 'react-router-dom';
import '../Introduction/Introduktion.css';
import Modal from './Modal';



const ForsteSide = () => {
    return (

        <div className="Design">
            <Modal></Modal>
            <div className="bubble">
                <p>Hej! Jeg hedder Merlin <br /> Velkommen til dette forsøg</p>
                <div className="trekantVedTaleboble">
                </div>
            </div>

            <div>
                <img className="Merlin" src="Billede1.png" alt="Merlin"></img>

            </div>
            <div className="Naste">
                <button className="ui button">
                    <Link to="/pagetwo"> Næste </Link>
                </button>
            </div>


        </div>


    );
}

export default ForsteSide;
