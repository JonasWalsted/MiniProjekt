import React from 'react';
import './Instruks.css';
import history from '../../history';
import { Link } from 'react-router-dom';
import '../Template.css';
class Instruks extends React.Component {

    render() {
        return (
            <div className="body" >
                <div className="Design">
                    <div className="tekstHeader">
                        <b class="ui dividing header">Instrugvhiviuks</b>
                    </div>

                    <div className="Merlin_box3">
                        <div className="bubble">
                            <p><br/>Nu skal vi have hentet app'en <br /> Søg på LEGO Super Mario <br/>der hvor du henter apps</p>
                            <div className="trekantVedTaleboble"></div>   
                        </div>
                        <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
                    
                    </div>

                    <div className="phone_app_frame"> <img className="phone_app" src="LEGOSUPERMARIO.png"></img></div>

                    <div className="Naste">
                      <button className="large ui next button">
                        <Link to="/PageSix"> Klaret! </Link>
                      </button>
                    </div>

                    <div className="tilbage">
                        <button className="large ui back button">
                            <Link to="/PageFour"> Tilbage </Link>
                        </button>
                    </div>
                </div>
                
            </div >
        )
    }
}

export default Instruks;
