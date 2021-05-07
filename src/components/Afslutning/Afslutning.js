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
            <p><br/>Så mangler vi bare nogle få spørgsmål </p>
            <div className="trekantVedTaleboble"></div>
          </div>
          <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
        </div>

        <div className="tilbage">
          <button className="ui back button">
            <Link to="/PageEight"> Tilbage </Link>
          </button>
        </div>
        <div className="Naste">
          <button className="large ui next button">
            <Link to="/pageNine"> Afslut </Link>
          </button>
        </div>


      </div>
    </div>


  );
}

export default Afslutning;
