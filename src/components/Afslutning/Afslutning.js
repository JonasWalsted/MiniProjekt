import React from 'react';

import { Link } from 'react-router-dom';




const Afslutning = () => {
  return (
    <div className="body">
      <div className="Design">
        <div className="tekstHeader">
          <b class="ui dividing header">Afslutning</b>
        </div>

        <div className="Merlin_box1">
          <div className="bubble">
            <p><br/>Det var det for denne gang! Mange tak for hjælpen, du kan bare lukke vinduet nu </p>
            <div className="trekantVedTaleboble"></div>
          </div>
          <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
        </div>

        <div className="tilbage">
          <button className="ui back button">
            <Link to="/PageEightDotOne"> Tilbage </Link>
          </button>
        </div>



      </div>
    </div>


  );
}

export default Afslutning;
