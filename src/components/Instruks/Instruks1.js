import React from 'react';
import './Instruks.css';
import history from '../../history';
import { Link } from 'react-router-dom';
import '../Template.css';

class Instruks1 extends React.Component {
    render() {
        return (
          <div className="body">
            <div className="Design">
              <div className="tekstHeader">
                <b  class="ui dividing header">Instruks</b>
              </div>

              <div className="Merlin_box1">
                <div className="bubble">
                  <p><br/>Så er vi endelig  <br /> klar til forsøget!</p>
                  <div className="trekantVedTaleboble"></div>
                </div>
                <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
              </div>

              <div className="Naste">
                <button className="large ui next button">
                  <Link to="/PageSeven"> Klar </Link>
                </button>
              </div>

              <div className="tilbage">
                  <button className="large ui back button">
                      <Link to="/PageFive"> Tilbage </Link>
                  </button>
            </div>



            </div>
          </div>
        )
    }
}

export default Instruks1;
