import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import FnlYear from './pages/FnlYear/FnlYear';
import FrstYear from './pages/FrstYear/FrstYear';
import Homepage from './pages/Homepage/Homepage';
import ScndYear from './pages/ScndYear/ScndYear';
import ThrdYear from './pages/ThrdYear/ThrdYear';

function App() {
  return (
    <div className="App">
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
        <Route path="/third-year" exact>
          <ThrdYear />
        </Route>
        <Route path="/final-year" exact>
          <FnlYear />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
