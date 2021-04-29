import React from 'react';
import './Remeider.css';
import history from '../../history';

class Introduktion extends React.Component {
    imageClick() {
        history.push('/PageFour')

    }
    render() {
        return (
            <div className="body" >
                <div className="Design">
                    <div className="tekstHeader">
                        <b>Velkommen</b>
                    </div>

                    <div className="Merlin_box3">
                        <div className="bubble">
                            <p>Hej! Jeg hedder Merlin <br /> Velkommen til dette forsøg</p>
                            <div className="trekantVedTaleboble"></div>
                        </div>
                        <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
                    </div>

                    <div className="tilbage">
                        <button className="large ui back button">
                            Tilbage
              </button>
                    </div>
                    <div className="Billede1">
                        <img onClick={this.imageClick} className="Skruetrakker" src="Skruetrakker.png" alt="Skruetrækker"></img>
                    </div>


                </div>
            </div >
        )
    }
}

export default Introduktion;
