import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ScrollTop from './components/ScrollTop';
import FnlYear from './pages/FnlYear/FnlYear';
import FrstYear from './pages/FrstYear/FrstYear';
import Homepage from './pages/Homepage/Homepage';
import ScndYear from './pages/ScndYear/ScndYear';
import ThrdYear from './pages/ThrdYear/ThrdYear';

function App() {
  return (
    <div className="App">
      <ScrollTop>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/first-year" exact>
            <FrstYear />
          </Route>
          <Route path="/second-year" exact>
            <ScndYear />
          </Route>
          {/*Different way to render components*/}
          <Route path="/third-year" exact render={() => <ThrdYear />} />
          {/*Different way to render components*/}
          <Route path="/final-year" exact component={FnlYear} />
        </Switch>
      </ScrollTop>
    </div>
  );
}

export default App;
