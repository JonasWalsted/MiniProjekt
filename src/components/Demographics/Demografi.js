import React from 'react';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';
import InformationCreate from './InformationCreate';
import InformationList from './InformationList';
import { Link } from 'react-router-dom';
import '../Template.css';
import './Demographics.css';





const Demografi = (props) => {
  return (
    <div className="body">
      <div className="tekstHeader">
          <b class="ui dividing header">Lidt om dig</b>
      </div>
      <div className="Design">
        <div className="DemographicInput">
          <InformationCreate />
          <InformationList />
        </div>
        <div className="Merlin_box2">
          <div className="bubble">
            <p>Jeg har faktisk ikke fået dit navn?<br /> Hvis I er flere, så indtast navnene en af gangen</p>
            <div className="trekantVedTaleboble">
            </div>
          </div>
          <div>
            <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
          </div>
        </div>
        <div className="tilbage">
          <button className="ui back button">
            <Link to="/PageOne"> Tilbage </Link>
          </button>
        </div>

        <div className="Naste">
          <button className="ui next button">
               <Link to="/PageTwoDotFive"> Næste </Link>
          </button>
        </div>
      </div>
    </div>
  );
}



export default Demografi;
