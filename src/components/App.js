import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Introduktion from './introduktion/Introduktion';
import GoogleAuth from './GoogleAuth';
import Demografi from './Demografi';
import Video  from './Video';

const PageOne = () => {
  return (
    <div>
      <Introduktion />
      <GoogleAuth />
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
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
        <Route path="/PageThree" component={PageThree} />
      </BrowserRouter>
    </div>
  )

}

export default App;
