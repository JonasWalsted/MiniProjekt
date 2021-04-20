import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Introduktion from './introduktion/Introduktion';
import GoogleAuth from './GoogleAuth';
import Demografi from './Demografi';

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

const App = () => {


  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  )

}

export default App;
