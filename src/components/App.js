import React from 'react';
import { Router, Route } from 'react-router-dom';
import Introduktion from './Introduction/Introduktion';
import Demografi from './Demographics/Demografi';
import Demografi2 from './Demographics/Demografi2';
import Video from './Video/Video';
import history from '../history';
import ForsteSide from './Google_Login/ForsteSide';
import Remedier from './Remeider/Remedier';
import Instruks from './Instruks/Instruks';
import Instruks1 from './Instruks/Instruks1';
import Instruks2 from './Instruks/Instruks2';







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
  return (<div>
    <Demografi />
      </div>
  );
};

<<<<<<< HEAD
const PageTwoDotFive = () => {
  return (<div>
    <Demografi2 />
      </div>
=======
  </div>
>>>>>>> a66ed10ea709fb76cfa9d070e79b04af4a8e6b88
  );
};

const PageThree = () => {
  return <div>
    <Remedier />
  </div>
};

const PageFour = () => {
  return <div>
    <Video />
  </div>
};

const PageFive = () => {
  return <div>
    <Instruks />
  </div>
};
const PageSix = () => {
  return <div>
    <Instruks1 />
  </div>
};


const PageSeven = () => {
  return <div>
    <Instruks2 />
  </div>
};





const App = () => {


  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={PageOneOne} />
        <Route path="/PageOne" component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
          <Route path="/PageTwoDotFive" component={PageTwoDotFive} />
        <Route path="/PageThree" component={PageThree} />
        <Route path="/PageFour" component={PageFour} />
        <Route path="/PageFive" component={PageFive} />
        <Route path="/PageSix" component={PageSix} />
        <Route path="/PageSeven" component={PageSeven} />
      </Router>
    </div>
  )

}

export default App;
