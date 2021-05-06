import React from 'react';
import '../Template.css';
import { Link } from 'react-router-dom';
import './Introduktion.css';



const Introduktion = () => {
  return (
    <div className="body">
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
            <Link to="/pagetwodotfive"> Næste </Link>
          </button>
        </div>


      </div>
    </div>


  );
}

export default Introduktion;
