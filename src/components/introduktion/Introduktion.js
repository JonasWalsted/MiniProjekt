import React from 'react';
import '../Template.css'

import './Introduktion.css';




const Introduktion = () => {
  return (
    <div className="Design">
      <div className="bubble">
        <p>Hej! Jeg hedder Merlin <br /> Velkommen til dette forsøg</p>
        <div className="trekantVedTaleboble">
        </div>
      </div>

      <div>
        <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
        <div className="tilbage">
          <button className="ui button">
            Tilbage
          </button>
        </div>

        <div className="Naste">
          <button className="ui button">
            Næste
          </button>
        </div>
      </div>
    </div>


  );
}

export default Introduktion;
