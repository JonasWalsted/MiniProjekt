import React, { useState } from 'react';
import './Video.css';
import '../Template.css';
import { Link } from 'react-router-dom';



function Video() {
	const [playing, setPlaying] = useState(false);

	const HEIGHT = 500;
	const WIDTH = 500;

	const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

const a = () => {

}
	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};


	return (


    <div className="body">
      <div className="Design">
        <div className="tekstHeader">
            <b>Velkommen</b>
        </div>

        <div className="Merlin_box3">
            <div className="bubble">
                <p>  Indstil kameraet<br />  så man kan se dig og LEGO'et på bordet <br /> Tryk <b>start</b>, for at starte videoen</p>
                <div className="trekantVedTaleboble"></div>
            </div>
            <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
        </div>
        <div className="app__container">
            <video
              height={HEIGHT}
              width={WIDTH}
              muted
              autoPlay
              className="app__videoFeed"
            >
            </video> 
          </div>
          <div className="app__input">
          {playing ? (
              <button onClick={stopVideo}>Stop</button>
            ) : (
              <button onClick={startVideo}>Start</button>
            )}
          </div>
        </div>

        <div className="Naste">
          <button className="large ui next button">
            <Link to="/PageFive"> Færdig! </Link>
          </button>
        </div>

        <div className="tilbage">
            <button className="large ui back button">
                <Link to="/PageThree"> Tilbage </Link>
            </button>
      </div>



  </div>

	);
}

export default Video;
