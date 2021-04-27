import React from 'react';
import { Router, Route } from 'react-router-dom';
import Introduktion from './Introduction/Introduktion';
import Demografi from './Demographics/Demografi';
import Video from './Video/Video';
import history from '../history';
import ForsteSide from './Google_Login/ForsteSide';



const PageOneOne = () => {
  return (
    <div className="Hej">
      <ForsteSide />
    </div>
  );
};

const PageOne = () => {
  return (
    <div className="Hej">
      <Introduktion />
    </div>
  );
};

const PageTwo = () => {
  return <div>
    <Demografi />
  </div>
};
const PageThree = () => {
  return <div>
    <Video />
  </div>
};

const App = () => {


  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={PageOneOne} />
        <Route path="/PageOne" component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
        <Route path="/PageThree" component={PageThree} />
      </Router>
    </div>
  )

}

export default App;
