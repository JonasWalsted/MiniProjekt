import React from 'react';
import '../Template.css'
import { Link } from 'react-router-dom';
import Modal from './Modal';
import '../Introduction/Introduktion.css';


const ForsteSide = () => {
    return (
        <div className="body">
            <Modal />
            <div className="Design">
                <div className="tekstHeader">
                    <b class="ui dividing header">Velkommen</b>
                </div>

                <div className="Merlin_box1">
                    <div className="bubble">
                        <p>Hej! Jeg hedder Merlin <br /> Velkommen til dette forsøg</p>
                        <div className="trekantVedTaleboble"></div>
                    </div>
                    <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
                </div>

                <div className="Naste">
                    <button className="large ui next button">
                        <Link to="/pagetwo"> Næste </Link>
                    </button>
                </div>


            </div>
        </div>


    );
}

export default ForsteSide;
