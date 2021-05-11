import React from 'react';
import LikertSkala from './LikertSkala';
import './PostSporgsmal.css'
import { Link } from 'react-router-dom';




const PostSporgsmal = () => {

  return (
    <div className="body">

      <div className="tekstHeader">
        <b class="ui dividing header">Spørgsmål</b>
      </div>

      <div className="Design">
          <div className="questionBox">
            <div className="questionText"><b> Hvordan var det at bygge din bane? </b></div>
            <div className="likertBox">
              <p>    <LikertSkala /> </p>
            </div>
          </div>




        <div className="Merlin_box2">
          <div className="bubble">
            <p><br/>Så mangler vi bare nogle få spørgsmål </p>

            <div className="trekantVedTaleboble"></div>
          </div>
          <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
        </div>


        <div className="tilbage">
          <button className="ui back button">
            <Link to="/PageSevenDotTwo"> Tilbage </Link>
          </button>
        </div>

        <div className="Naste">
          <button className="large ui next button">
            <Link to="/PageEightDotOne"> Næste </Link>
          </button>
        </div>


      </div>
    </div>


  );
}

export default PostSporgsmal;
