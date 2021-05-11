import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import { PageOneOne, PageOne, PageTwo, PageTwoDotFive, PageThree, PageFour, PageFive, PageSix, PageSeven, PageSevenDotOne, PageSevenDotTwo, PageEight, PageNine } from '../Struktur';


const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={PageOneOne} />
        <Route path="/PageOne" component={PageOne} />
        <Route path="/PageTwo" component={PageTwo} />
        <Route path="/PageTwoDotFive" component={PageTwoDotFive} />
        <Route path="/PageThree" component={PageThree} />
        <Route path="/PageFour" component={PageFour} />
        <Route path="/PageFive" component={PageFive} />
        <Route path="/PageSix" component={PageSix} />
        <Route path="/PageSeven" component={PageSeven} />
        <Route path="/PageSevenDotOne" component={PageSevenDotOne} />
        <Route path="/PageSevenDotTwo" component={PageSevenDotTwo} />
        <Route path="/PageEight" component={PageEight} />
          <Route path="/PageNine" component={PageNine} />

      </Router>
    </div>
  )

}

export default App;
