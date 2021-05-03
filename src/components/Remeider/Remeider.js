import React from 'react';
import './Remeider.css';
import history from '../../history';
import { Link } from 'react-router-dom';

class Introduktion extends React.Component {
    imageClick() {
        history.push('/PageFour')

    }
    render() {
        return (
            <div className="body" >
                <div className="Design">
                    <div className="tekstHeader">
                        <h1>Velkommen</h1>
                    </div>

                    <div className="Merlin_box3">
                        <div className="bubble">
                            <p>Vi skal nu bruge nogle ting til at lege med Mario. <br /> Tryk på skruetrækkeren når du har fundet en</p>
                            <div className="trekantVedTaleboble"></div>
                        </div>
                        <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
                    </div>

                    <div className="tilbage">
                        <button className="large ui back button">
                            <Link to="/PageTwo"> Tilbage </Link>
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
