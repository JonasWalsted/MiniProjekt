import React, { useState } from 'react';
import history from '../../history'
import './Remeider.css';
import { Link } from 'react-router-dom';




const Introduktion = () => {
    const imageClick = () => {
        history.push('/PageFour')
    }
    const [activeIndex, setActiveIndex] = useState(false)
    const imageActive = () => {
        setActiveIndex(true)
    }
    if (activeIndex === true) {
        return (
            <div className="body" >
                <div className="Design">
                    <div className="tekstHeader">
                        <h1>Velkommen</h1>
                    </div>

                    <div className="Merlin_box3">
                        <div className="bubble">
                            <p>Hvad med en saks? <br /> Har du sådan en?</p>
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
                        <img className="Skruetrakker" src="Skruetrakker.png" alt="Skruetrækker"></img>
                    </div>
                    <div className="Billede2">
                        <img onClick={imageClick} className="Saks" alt="KlipKlip" src="saks.png"></img>
                    </div>


                </div>
            </div >

        )

    }
    return (
        <div className="body" >
            <div className="Design">
                <div className="tekstHeader">
                    <h1>Velkommen</h1>
                </div>

                <div className="Merlin_box3">
                    <div className="bubble">
                        <p>Nu skal vi bruge et par ting. <br /> Tryk på skruetrækkeren når du har fundet en</p>
                        <div className="trekantVedTaleboble"></div>
                    </div>
                    <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
                </div>

                <div className="tilbage">
                    <button className="large ui back button">
                        <Link to="/PageTwoDotFive"> Tilbage </Link>
                    </button>

                    <div className="Naste">
                        <button className="large ui next button">
                            <Link to="/PageFour"> Næste </Link>
                        </button>
                    </div>
                </div>
                <div className="Billede1">
                    <img onClick={imageActive} className="Skruetrakker" src="Skruetrakker.png" alt="Skruetrækker"></img>
                </div>



            </div>
        </div >

    )
}


export default Introduktion;
