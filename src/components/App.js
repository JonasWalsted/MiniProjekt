import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Introduktion from './introduktion/Introduktion';
import GoogleAuth from './GoogleAuth';

const PageOne = () => {
  return (
    <div>

      <Introduktion />
      <GoogleAuth />
      <Link to="/pagetwo"> Navigate </Link>
    </div>
  );
};

const PageTwo = () => {
  return <div>
    PageTwo
    <Link to="/"> Navigate </Link>
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
