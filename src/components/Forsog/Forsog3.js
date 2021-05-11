import React from 'react';

import '../Template.css';
import { Link } from 'react-router-dom';


class Forsog3 extends React.Component {

    render() {
        return (
            <div className="body" >
                <div className="Design">
                    <div className="tekstHeader">
                        <b class="ui dividing header">Forsøg</b>
                    </div>

                    <div className="Merlin_box3">
                        <div className="bubble">
                            <p><br/>Nu skal du følge app'en <br/> til og med du har bygget<br/> "Min første Bane" </p>
                            <div className="trekantVedTaleboble">

                            </div>


                        </div>
                        <img className="Merlin" src="Billede1.png" alt="Merlin"></img>

                    </div>

                    <div className="phone_app_frame"> <img className="phone_app" src="Punkt3.png"></img></div>

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

export default Forsog3;
