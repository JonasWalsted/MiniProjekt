import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import { PageOneOne, PageOne, PageTwoDotFive, PageThree, PageFour, PageFive, PageSix, PageSeven } from '../Struktur';


const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={PageOneOne} />
        <Route path="/PageOne" component={PageOne} />
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
