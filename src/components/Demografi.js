import React from 'react';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Demografi = () => {
  return (



<div>
<form class="ui form">
  <h4 class="ui dividing header">PERSONLIGE INFORMATIONER</h4>
   <div class="two fields">
 <div class="field">
  <label>
    Fornavn:
    <input type="text" name="name" placeholder="Fornavn:" />
  </label>
      </div>
      <div class="field">
       <label>
         Efternavn:
         <input type="text" name="name" placeholder="Efternavn:" />
       </label>
       </div>

            </div>

</form>

  <div className="Design">
      <div class="ui centered grid"><h1> Hvilken aldersgruppe tilhører du? </h1></div>
          <p>    <QuestionList /></p>
<br />
          <p>     <QuestionDetail /></p>


   <div class="ui button" tabindex="0">NÆSTE</div>



  <div className="bubble">
    <p>Hej! Jeg hedder Merlin <br /> Velkommen til dette forsøg</p>
    <div className="trekantVedTaleboble">
    </div>
    </div>
      <div>
        <img className="Merlin" src="Billede1.png" alt="Merlin"></img>
          <div className="tilbage">
          <button className="ui button">
            <Link to="/"> Tilbage </Link>
      </button>
    </div>

    <div className="Naste">
      <button className="ui button">
        Næste
      </button>
    </div>
  </div>
</div>





    </div>
    );
}

export default Demografi;
