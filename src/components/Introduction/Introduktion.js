import React from 'react';
import '../Template.css'
import { Link } from 'react-router-dom';
import './Introduktion.css';



const Introduktion = () => {
  return (


    <div className="body">
      <div className="Design">
        <div className="tekstHeader">
          <b>Velkommen</b>
        </div>
        <div className="bubble">
          <p>Hej! Jeg hedder Merlin <br /> Velkommen til dette forsøg</p>
          <div className="trekantVedTaleboble">
          </div>
        </div>

        <div>
          <img className="Merlin" src="Billede1.png" alt="Merlin"></img>

        </div>
        <div className="Naste">
          <button className="large ui next button">
            <Link to="/pagetwo"> Næste </Link>
          </button>
        </div>
        <div className="tilbage">
          <button className="large ui back button">
            Tilbage
            </button>
        </div>


      </div>
    </div>


  );
}

export default Introduktion;
