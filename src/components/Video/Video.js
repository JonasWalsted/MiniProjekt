import React, { useState } from 'react';
import './Video.css';
import { Link } from 'react-router-dom';

function Video() {
	const [playing, setPlaying] = useState(false);

	const HEIGHT = 500;
	const WIDTH =500;

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


	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};


	return (
<div>
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
              <button onClick={stopVideo} className="large ui next button">Stop video</button>
            ) : (
              <button onClick={startVideo} className="large ui next button">Start video</button>
            )}

</div>
  </div>

	);
}

export default Video;
