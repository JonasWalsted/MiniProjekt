import React, { useState } from 'react';
import './Video.css';
import Video from './Video'
import '../Template.css';
import { Link } from 'react-router-dom';


const VideoInstruks = () => {
  return (

        <div className="body">
          <div className="Design">
            <div className="tekstHeader">
                  <b class="ui dividing header">Instruks</b>
            </div>

            <div className="Merlin_box3">
                <div className="bubble">
                    <p>  Indstil kameraet<br />  så man kan se dig og LEGO'et på bordet <br /> Tryk <b>start</b>, for at starte videoen</p>
                    <div className="trekantVedTaleboble"></div>
                </div>
                <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
            </div>


              <Video />

            </div>

            <div className="Naste">
              <button className="large ui next button">
                <Link to="/PageFive"> Færdig! </Link>
              </button>
            </div>

            <div className="tilbage">
                <button className="large ui back button">
                    <Link to="/PageThree"> Tilbage </Link>
                </button>
          </div>



      </div>


  );
}




export default VideoInstruks;
