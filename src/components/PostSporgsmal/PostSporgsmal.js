import React from 'react';

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
          <div className="questionText">
            <b>Hvad synes du om CSS?</b>  
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
            <Link to="/PageSeven"> Tilbage </Link>
          </button>
        </div>

        <div className="Naste">
          <button className="large ui next button">
            <Link to="/pageNine"> Næste </Link>
          </button>
        </div>


      </div>
    </div>


  );
}

export default PostSporgsmal;
