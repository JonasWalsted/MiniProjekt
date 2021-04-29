import React from 'react';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';
import Forventning from './Forventning';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../Template.css';
import './Demographics.css';

const Demografi = () => {
  return (


    <div className="body">
      <div className="tekstHeader">
          <b class="ui dividing header">PERSONLIGE INFORMATIONER</b>
      </div>

      <div className="nameInput">
        <form class="ui form">
              <label for="fornavn">Fornavn:</label>
              <input type="text" name="name" id="fornavn" placeholder="Fornavn:" requred />

              <label for="efternavn">Efternavn:</label>
              <input type="text" name="name" id="efternavn" placeholder="Efternavn:" requred />
        </form>
      </div>

      <div className="Design">
        <div className="aldersgruppe">
          <div><h1> Hvilken aldersgruppe tilhører du? </h1></div>
          <p>    <QuestionList /></p>
          <br />
          <p>     <QuestionDetail /></p>
        </div>

        <div className="Merlin_box2">
          <div className="bubble">
            <p>Jeg har faktisk ikke fået dit navn. Hvad hedder du? <br />Hvor gammel er du og hvor bor du?</p>
            <div className="trekantVedTaleboble">
            </div>
          </div>
          <div>
            <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
          </div>
        </div>

        <div><Forventning/></div>

        <div className="tilbage">
          <button className="ui back button">
            <Link to="/"> Tilbage </Link>
          </button>
        </div>

        <div className="Naste">
          <button className="ui next button">
            <Link to="/PageThree"> Næste </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Demografi;
