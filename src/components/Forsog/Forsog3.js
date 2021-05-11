import React from 'react';
import Video from '../Video/Video'
import './Forsog.css'

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
      <Video />
                    <div className="Merlin_box3">
                        <div className="bubble">
                            <p>Vil du vise din bane til kameraet <br/> og fortælle hvad du har lavet </p>
                            <div   className="trekantVedTaleboble">

                            </div>


                        </div>
                        <img className="Merlin" src="Billede1.png" alt="Merlin"></img>

                    </div>



                    <div className="Naste">
                      <button className="large ui next button">
                        <Link to="/PageSevenDotTwo"> Klaret! </Link>
                      </button>
                    </div>

                    <div className="tilbage">
                        <button className="large ui back button">
                            <Link to="/PageSeven"> Tilbage </Link>
                        </button>
                  </div>


                </div>
            </div >
        )
    }
}

export default Forsog3;
