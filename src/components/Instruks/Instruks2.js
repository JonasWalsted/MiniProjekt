import React from 'react';
import './Instruks.css';

import { Link } from 'react-router-dom';
import '../Template.css';

class Instruks2 extends React.Component {

    render() {
        return (
            <div className="body" >
                <div className="Design">
                    <div className="tekstHeader">
                        <b>Instruks</b>
                    </div>

                    <div className="Merlin_box3">
                        <div className="bubble">
                            <p><br/>Nu skal du følge app'en <br/> indtil du har bygget<br/> "Min første Bane" </p>
                            <div className="trekantVedTaleboble">

                            </div>
                            <div> <img className="app" src="Punkt3.png" alt="Merlin"></img></div>

                        </div>
                        <img className="Merlin" src="Billede1.png" alt="Merlin"></img>

                    </div>
                    <div className="Naste">
                      <button className="large ui next button">
                        <Link to="/PageEight"> Klaret! </Link>
                      </button>
                    </div>

                    <div className="tilbage">
                        <button className="large ui back button">
                            <Link to="/PageSix"> Tilbage </Link>
                        </button>
                  </div>


                </div>
            </div >
        )
    }
}

export default Instruks2;
